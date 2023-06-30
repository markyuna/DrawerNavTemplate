const fs = require('fs');

const readmeContent = `# Demo Drawer Navigation

Descripción de tu proyecto.

## Versiones utilizadas




## Resultado final

![Imagen del resultado final](assets/app.jpg)`;

fs.writeFileSync('README.md', readmeContent);
