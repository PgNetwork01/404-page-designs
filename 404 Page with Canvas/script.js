        // JavaScript for drawing board
        const canvas = document.getElementById('drawingBoard');
        const ctx = canvas.getContext('2d');
        const clearBtn = document.getElementById('clearBtn');

        let isDrawing = false;

        function startPosition(e) {
            isDrawing = true;
            draw(e);
        }

        function endPosition() {
            isDrawing = false;
            ctx.beginPath();
        }

        function draw(e) {
            if (!isDrawing) return;

            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#333';

            ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }

        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', endPosition);
        canvas.addEventListener('mousemove', draw);

        clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
