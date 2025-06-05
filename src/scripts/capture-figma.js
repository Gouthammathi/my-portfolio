const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const figmaProjects = [
  {
    name: 'portfolio',
    url: 'https://www.figma.com/proto/I92d0Mc53KvUnkt5tVgLOF/portfolio?node-id=1-2&starting-point-node-id=1%3A2&t=8j7zHApls4QzuqW3-1',
    waitTime: 8000 // Longer wait for portfolio to load completely
  },
  {
    name: 'admin',
    url: 'https://www.figma.com/proto/mtDj6PIIoQDIFb0e3Yp7s9/admin-login?node-id=552-1518&starting-point-node-id=552%3A1518&t=npiDrCggLocDyQqC-1',
    waitTime: 6000
  },
  {
    name: 'menu',
    url: 'https://www.figma.com/proto/WoZS1373JOE6su2BkmTsPr/menu?node-id=0-3&scaling=scale-down-width&content-scaling=fixed&t=8H74XJwrNPG9KuAh-1',
    waitTime: 6000
  },
  {
    name: 'ecommerce',
    url: 'https://www.figma.com/proto/XYojmCrhS750WGxX4tdqSc/Untitled?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&content-scaling=fixed&t=0fqFuc2zLOGfjImY-1',
    waitTime: 6000
  },
  {
    name: 'mobile',
    url: 'https://www.figma.com/proto/NfmxMlZA1CFWrX2fTVeVS4/Untitled?node-id=8-62&p=f&t=qB2LIX8YZvcUbbwi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    waitTime: 6000
  }
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { 
      width: 1920, 
      height: 1080,
      deviceScaleFactor: 2 // Higher resolution for clearer images
    }
  });

  try {
    for (const project of figmaProjects) {
      console.log(`Capturing screenshot for ${project.name}...`);
      
      const page = await browser.newPage();
      
      // Set up request interception to block unnecessary resources
      await page.setRequestInterception(true);
      page.on('request', (request) => {
        const resourceType = request.resourceType();
        if (resourceType === 'image' || resourceType === 'stylesheet' || resourceType === 'font') {
          request.continue();
        } else {
          request.continue();
        }
      });

      // Navigate to the Figma prototype
      await page.goto(project.url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 // Longer timeout for loading
      });
      
      // Wait for the Figma prototype to load completely
      await page.waitForTimeout(project.waitTime);
      
      // Create directory if it doesn't exist
      const dir = path.join(__dirname, '../public/Images/figma');
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Take screenshot with high quality settings
      await page.screenshot({
        path: path.join(dir, `${project.name}.png`),
        fullPage: true,
        quality: 100, // Maximum quality
        type: 'png' // Use PNG for better quality
      });
      
      console.log(`Screenshot saved for ${project.name}`);
      await page.close();
    }
  } catch (error) {
    console.error('Error capturing screenshots:', error);
  } finally {
    await browser.close();
  }
}

captureScreenshots(); 