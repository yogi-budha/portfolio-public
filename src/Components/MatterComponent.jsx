import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';
import MatterWrap from 'matter-wrap';

const MatterComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize Matter.js plugins
    Matter.use(MatterAttractors);
    Matter.use(MatterWrap);

    const runMatter = () => {
      const { Engine, Render, Runner, World, Bodies, Events, Mouse, Body, Common, Vertices } = Matter;

      // Canvas dimensions
      const canvas = canvasRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Create engine and renderer
      const engine = Engine.create();
      engine.world.gravity.y = 0;
      engine.world.gravity.x = 0;

      const render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
          width,
          height,
          wireframes: false,
          background: 'transparent', // Transparent background
        },
      });

      // Create runner
      const runner = Runner.create();

      // Create a central attractive body
      const attractiveBody = Bodies.circle(width / 2, height / 2, 50, {
        isStatic: true,
        render: {
          fillStyle: '#000000', // Black moving cursor
        },
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
      });

      World.add(engine.world, attractiveBody);

      // Function to generate random irregular vertices
      const generateRandomVertices = (centerX, centerY, numPoints, sizeRange) => {
        const vertices = [];
        for (let i = 0; i < numPoints; i++) {
          const angle = (Math.PI * 2 * i) / numPoints;
          const radius = Common.random(sizeRange.min, sizeRange.max);
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          vertices.push({ x, y });
        }
        return vertices;
      };

      // Create random irregular shapes
      for (let i = 0; i < 400; i++) {
        const x = Common.random(0, width);
        const y = Common.random(0, height);
        const numPoints = Common.random(5, 10); // Random number of points (5 to 10)
        const sizeRange = { min: 10, max: 40 }; // Size range for vertices

        const vertices = generateRandomVertices(0, 0, numPoints, sizeRange);
        const shape = Bodies.fromVertices(x, y, Vertices.create(vertices), {
          mass: sizeRange.max / 10,
          friction: 0,
          frictionAir: 0.02,
          render: {
            fillStyle: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
            strokeStyle: '#111827', // Dark gray outline
            lineWidth: 2,
          },
        });

        World.add(engine.world, shape);
      }

      // Add mouse control to move the attractive body
      const mouse = Mouse.create(render.canvas);

      Events.on(engine, 'afterUpdate', () => {
        if (mouse.position.x && mouse.position.y) {
          Body.translate(attractiveBody, {
            x: (mouse.position.x - attractiveBody.position.x) * 0.12,
            y: (mouse.position.y - attractiveBody.position.y) * 0.12,
          });
        }
      });

      // Run the engine and renderer
      Runner.run(runner, engine);
      Render.run(render);

      // Handle window resize
      const handleResize = () => {
        render.canvas.width = window.innerWidth;
        render.canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);

      // Clean up when component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
        Render.stop(render);
        Runner.stop(runner);
        Engine.clear(engine);
      };
    };

    const cleanup = runMatter();
    return cleanup;
  }, []);

  return <canvas className='absolute inset-0' ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />;
};

export default MatterComponent;
