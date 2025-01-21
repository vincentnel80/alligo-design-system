const fs = require("fs");
const path = require("path");

// Path to the Storybook static directory
const storybookStaticPath = path.resolve(
  __dirname,
  "storybook-static"
);

// Output CSS file
const outputCSSFile = path.resolve(__dirname, "custom-styles.css");

// Function to extract CSS
const extractCSS = (fileContent) => {
  // Log the content for debugging
  console.log("File Content Preview:");
  console.log(fileContent.slice(0, 1000)); // Preview the first 1000 characters
  return ""; // Return empty CSS for now
};

// Read and process files
const extractCSSFromStorybook = () => {
  console.log("Starting CSS extraction...");

  if (!fs.existsSync(storybookStaticPath)) {
    console.error("Error: Storybook static directory not found!");
    return;
  }

  const jsFiles = fs
    .readdirSync(storybookStaticPath)
    .filter((file) => file.endsWith(".js"));

  if (jsFiles.length === 0) {
    console.error("No JavaScript files found in Storybook static directory!");
    return;
  }

  let extractedCSS = "";

  jsFiles.forEach((file) => {
    const filePath = path.join(storybookStaticPath, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const css = extractCSS(fileContent);
    if (css) {
      console.log(`Extracted CSS from: ${file}`);
      extractedCSS += css + "\n";
    }
  });

  if (extractedCSS) {
    fs.writeFileSync(outputCSSFile, extractedCSS);
    console.log(`CSS extracted successfully to ${outputCSSFile}`);
  } else {
    console.log("No CSS found to extract.");
  }
};

// Run the extraction
extractCSSFromStorybook();
