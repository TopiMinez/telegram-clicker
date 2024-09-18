gdjs.LoadCode = {};
gdjs.LoadCode.localVariables = [];
gdjs.LoadCode.GDNewTextObjects1= [];
gdjs.LoadCode.GDNewTextObjects2= [];
gdjs.LoadCode.GDNewText2Objects1= [];
gdjs.LoadCode.GDNewText2Objects2= [];
gdjs.LoadCode.GDNewText3Objects1= [];
gdjs.LoadCode.GDNewText3Objects2= [];


gdjs.LoadCode.asyncCallback10921564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}gdjs.LoadCode.localVariables.length = 0;
}
gdjs.LoadCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 3)), (runtimeScene) => (gdjs.LoadCode.asyncCallback10921564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "coin", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "click", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.LoadCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadCode.GDNewTextObjects1.length = 0;
gdjs.LoadCode.GDNewTextObjects2.length = 0;
gdjs.LoadCode.GDNewText2Objects1.length = 0;
gdjs.LoadCode.GDNewText2Objects2.length = 0;
gdjs.LoadCode.GDNewText3Objects1.length = 0;
gdjs.LoadCode.GDNewText3Objects2.length = 0;

gdjs.LoadCode.eventsList1(runtimeScene);

return;

}

gdjs['LoadCode'] = gdjs.LoadCode;
