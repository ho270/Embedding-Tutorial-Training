console.log("Test my HTML is reading to Python Script");
let viz;
// Create a variable to store the viz container
// Create a variable to store the dashboard options
// Create a variable to store the URL
const vizContainer = document.getElementById("vizContainer");
const option = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?";

function initViz() {
  viz = new tableau.Viz(vizContainer, url, option);
}

//Listeners go here
document.addEventListener("DOMContentLoaded", initViz);

//Buttons go here
const exportPDFButton = document.getElementById("exportPDF");
function exportPDFFunction() {
  viz.showExportPDFDialog();
}
exportPDFButton.addEventListener("click", exportPDFFunction);

const exportPowerPointButton = document.getElementById("exportPowerPoint");
function exportPowerPointFunction() {
  viz.showExportPowerPointDialog();
}
exportPowerPointButton.addEventListener("click", exportPowerPointFunction);

//Filter Functions go here
document
  .getElementById("filterButton")
  .addEventListener("click", applyFilterFunction);
function applyFilterFunction() {
  console.log("hello world");
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  console.log(activeSheet);
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheetToFilter = sheets[0];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered"));
}
