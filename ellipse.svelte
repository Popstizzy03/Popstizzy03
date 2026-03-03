<script lang="ts">
  // Constants based on 9x^2 + 16y^2 = 52
  const a = Math.sqrt(52 / 9);  // ~2.40
  const b = Math.sqrt(52 / 16); // ~1.80
  const px = 2;                 // Point x
  const py = -1;                // Point y
  
  // Scaling for the SVG display
  const scale = 40;
  const width = 400;
  const height = 400;

  // Tangent: 9x - 8y - 26 = 0 => y = (9x - 26) / 8
  const getTangentY = (x: number) => (9 * x - 26) / 8;
  
  // Normal: 8x + 9y - 7 = 0 => y = (7 - 8x) / 9
  const getNormalY = (x: number) => (7 - 8 * x) / 9;

  // Helper to convert math coords to SVG space
  // We center (0,0) in the middle of the SVG
  const tox = (x: number) => width / 2 + x * scale;
  const toy = (y: number) => height / 2 - y * scale; // Negative to flip Y axis
</script>

<div class="container">
  <svg {width} {height} viewBox="0 0 {width} {height}">
    <line x1="0" y1={height/2} x2={width} y2={height/2} stroke="#ccc" />
    <line x1={width/2} y1="0" x2={width/2} y2={height} stroke="#ccc" />

    <ellipse 
      cx={tox(0)} cy={toy(0)} 
      rx={a * scale} ry={b * scale} 
      fill="none" stroke="royalblue" stroke-width="2" 
    />

    <line 
      x1={tox(-1)} y1={toy(getTangentY(-1))} 
      x2={tox(4)} y2={toy(getTangentY(4))} 
      stroke="crimson" stroke-width="2" stroke-dasharray="4"
    />

    <line 
      x1={tox(0)} y1={toy(getNormalY(0))} 
      x2={tox(3.5)} y2={toy(getNormalY(3.5))} 
      stroke="forestgreen" stroke-width="2"
    />

    <circle cx={tox(px)} cy={toy(py)} r="5" fill="black" />
    
    <text x={tox(px) + 10} y={toy(py) + 20} font-size="14">(2, -1)</text>
  </svg>

  <div class="legend">
    <p><span class="dot blue"></span> Ellipse: $9x^2 + 16y^2 = 52$</p>
    <p><span class="dot red"></span> Tangent: $9x - 8y - 26 = 0$</p>
    <p><span class="dot green"></span> Normal: $8x + 9y - 7 = 0$</p>
  </div>
</div>

<style>
  .container { display: flex; flex-direction: column; align-items: center; font-family: sans-serif; }
  svg { border: 1px solid #eee; background: #fafafa; border-radius: 8px; }
  .legend { margin-top: 1rem; text-align: left; }
  .dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px; }
  .blue { background: royalblue; }
  .red { background: crimson; }
  .green { background: forestgreen; }
</style>
