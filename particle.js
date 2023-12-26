
const twinkle = (numObjects, canvas) => {
    const context= canvas.getContext('2d');
    const objects = [];

    const createObject = () => {
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = (canvas.clientHeight - 200);
        const object = {
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            size: Math.random() * 50 + 1 + 10,
            speed : Math.random() * 0.015,
            status: true,
            factor : Math.random(),
            opacity: 0.01 // Add opacity property
        };
        objects.push(object);
    }

    for (let i = 0; i < numObjects; i++) {
        createObject();
    }

    const updateObjects = () => {
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = (canvas.clientHeight - 100);

        objects.forEach((object) => {
            const direction = object.x < (canvasWidth * 0.5) ? -1 : 1;
            object.x += direction * 0.5 * object.factor;

            if (object.opacity <= 0) {
                // 리셋
                object.x = Math.random() * canvasWidth,
                object.y = Math.random() * canvasHeight,
                object.opacity = 0.01; 
                object.status = true;
            }else if(object.opacity >= 0.25){
                object.status = false;
            }

            object.opacity += object.status ? object.speed : -object.speed;
        });
    }

    const drawObjects = () => {
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            const opacity = Math.random() > 0.3 ? object.opacity : object.opacity * 1.3;
            
            context.fillStyle = `rgba(${240 + 15 *object.factor}, 200, ${150 + 30 *object.factor}, ${opacity})`;
            context.shadowColor = 'rgba(200, 200, 255, 0.5)';
            context.shadowBlur = 15;

            // Draw diamond shape
            context.beginPath();
            context.moveTo(object.x, object.y + object.size / 2);
            context.lineTo(object.x + object.size / 2, object.y);
            context.lineTo(object.x + object.size, object.y + object.size / 2);
            context.lineTo(object.x + object.size / 2, object.y + object.size);
            context.closePath();

            // Apply blur filter
            //context.filter = 'blur(5px)';

            context.fill();
        }
    }

    const animate = () => {
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = (canvas.clientHeight - 100);
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        updateObjects();
        drawObjects();

        requestAnimationFrame(animate);
    }
    
    animate();
}

