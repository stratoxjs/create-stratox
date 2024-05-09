#!/usr/bin/env node
const prompts = require('prompts');

// Require the file system module
const fs = require('fs');
const path = require('path');

const prompt = [
  {
    type: 'text',
    name: 'name',
    message: 'Project name',
    initial: 'stratox-app',
    validate: name => name.length <= 0 ? 'Required field' : true
  },
  {
    type: 'toggle',
    name: 'tailwind',
    message: 'Install Tailwind?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  },
  {
    type: prev => prev ? 'toggle' : null,
    name: 'startoxTailwind',
    message: 'Install Stratox Tailwind design system?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  },
  {
    type: 'toggle',
    name: 'alpine',
    message: 'Install Alpine?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  },
  {
    type: 'toggle',
    name: 'eslint',
    message: 'ESlint for quality code?',
    initial: false,
    active: 'yes',
    inactive: 'no'
  }
];

const packageData = {
  "name": "stratox-app",
  "type": "module",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview --host"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "terser": "^5.29.1",
    "vite": "^5.1.1"
  },
  "dependencies": {
    "@stratox/core": "^2.0.0",
    "@stratox/pilot": "^1.1.0",
    "stratox": "^2.3.0"
  }
}


function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    entry.isDirectory() ? copyDir(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
  }
}

function readFile(target, replace) {
  const sourceDir = path.join(__dirname, target);
  let output = fs.readFileSync(sourceDir, 'utf-8');
  if(typeof replace === "object") {
    for (const [key, value] of Object.entries(replace)) {
      output = output.replace('['+key.toUpperCase()+']', value);
    }
  }
  return output;
}

function createProject(srource, target) {
  const sourceDir = path.join(__dirname, srource);
  const targetDir = process.cwd()+target; 

  try {
    copyDir(sourceDir, targetDir);
  } catch (err) {
    console.error('Error initializing project:', err);
  }
}

function createDir(dirname) {
  const dir = path.join(process.cwd(), dirname);
  fs.mkdir(dir, (err) => {
    if (err) {
      console.error('Error creating directory:', err);
    } else {
      console.log('Directory "tests" created successfully.');
    }
  });
}

function createFile(filePath, content) {
  // Specify the path for the new file
  const textFilePath = path.join(process.cwd(), filePath);

  // Write the file to the current directory
  fs.writeFile(textFilePath, content, (err) => {
    if (err) {
      console.error('Error creating '+filePath+':', err);
      process.exit(1);
    }
  });
}

function toSeoUrl(url) {
  return url.toString()             // Convert to string
    .normalize('NFD')               // Change diacritics
    .replace(/[\u0300-\u036f]/g,'') // Remove illegal characters
    .replace(/\s+/g,'-')            // Change whitespace to dashes
    .toLowerCase()                  // Change to lowercase
    .replace(/&/g,'-and-')          // Replace ampersand
    .replace(/[^a-z0-9\-]/g,'')     // Remove anything that is not a letter, number or dash
    .replace(/-+/g,'-')             // Remove duplicate dashes
    .replace(/^-*/,'')              // Remove starting dashes
    .replace(/-*$/,'');             // Remove trailing dashes
}

function friendlyName(inputString) {
  return replaceSpecialChar(inputString)
    // Convert to lower case
    .toLowerCase()
    // Replace invalid characters with a space
    .replace(/[^a-z0-9 -]/g, ' ')
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-')
    // Collapse dashes
    .replace(/-+/g, '-');
}

function replaceSpecialChar(str) {
  const charMap = {
    'é': 'e', 'è': 'e', 'ë': 'e', 'ê': 'e', 'É': 'E', 'È': 'E', 'Ë': 'E', 'Ê': 'E',
    'á': 'a', 'à': 'a', 'ä': 'a', 'â': 'a', 'å': 'a', 'Á': 'A', 'À': 'A', 'Ä': 'A', 'Â': 'A', 'Å': 'A',
    'ó': 'o', 'ò': 'o', 'ö': 'o', 'ô': 'o', 'Ó': 'O', 'Ò': 'O', 'Ö': 'O', 'Ô': 'O',
    'í': 'i', 'ì': 'i', 'ï': 'i', 'î': 'i', 'Í': 'I', 'Ì': 'I', 'Ï': 'I', 'Î': 'I',
    'ú': 'u', 'ù': 'u', 'ü': 'u', 'û': 'u', 'Ú': 'U', 'Ù': 'U', 'Ü': 'U', 'Û': 'U',
    'ý': 'y', 'ÿ': 'y', 'Ý': 'Y', 'ø': 'o', 'Ø': 'O', 'œ': 'oe', 'Œ': 'OE', 'Æ': 'AE', 'ç': 'c', 'Ç': 'C'
  };
  return str.replace(/[éèëêÉÈËÊáàäâåÁÀÄÂÅóòöôÓÒÖÔíìïîÍÌÏÎúùüûÚÙÜÛýÿÝøØœŒÆçÇ]/g, match => charMap[match]);
}


console.log(`Ehhhh!THIS IS A TEST PACKAGE THAT WILL BE REMOVED!!!!`);
(async () => {

  let sucess = true, part1 = "import '@/assets/style.css';", part2 = '', part3 = '';
  const response = await prompts(prompt, {
    onCancel: function() {
      sucess = false;
    }
  });
  const name = friendlyName(response.name ?? packageData.name);
  packageData.name = name;
  const projectPath = "./"+name;

  if(sucess) {
    createDir(projectPath);

    if(response.tailwind) {
      packageData.devDependencies['tailwindcss'] = "^3.4.1";
      if(response.startoxTailwind) {
        packageData.devDependencies['@stratox/tailwind'] = "^1.0.7";
        createFile(projectPath+"/tailwind.config.cjs", readFile("./configs/tailwind-stratox.txt"));
      } else {
        createFile(projectPath+"/tailwind.config.cjs", readFile("./configs/tailwind.txt"));
      }
    }

    if(response.eslint) {
      packageData.devDependencies['eslint'] = "^8.56.0";
      packageData.scripts['lint'] = "eslint . --ext .js --fix --ignore-path .gitignore";
      createFile(projectPath+"/.eslintrc.json", readFile("./configs/eslint.txt"));
    }

    if(response.alpine) {
      part2 += "import Alpine from 'alpinejs';\n\nwindow.Alpine = Alpine;";
      packageData.dependencies['alpinejs'] = "^3.13.10";
    }

    // CREATE VITE CONFIG
    const packageJsonStr = JSON.stringify(packageData, true, 2);
    createFile(projectPath+"/package.json", packageJsonStr);

    // Create project files
    createProject('./templates', '/'+name);
    

    createFile(projectPath+"/src/main.js", readFile("./configs/main.txt", {
      MAIN_PART_1: part1,
      MAIN_PART_2: part2,
      MAIN_PART_3: part3
    }));

    console.log(`\nStratox has been installed...`);
    console.log(`run the commands bellow to complete the installation:\n`);
    console.log(`cd ${name}`);
    console.log(`npm install`);
    console.log(`npm run dev\n`);
    
  } else {
    console.log(`The installation has been canceled`);
  }
  
})();
