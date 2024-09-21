gdjs.LoadCode = {};
gdjs.LoadCode.localVariables = [];
gdjs.LoadCode.GDNewTextObjects1= [];
gdjs.LoadCode.GDNewTextObjects2= [];
gdjs.LoadCode.GDNewTextObjects3= [];
gdjs.LoadCode.GDNewText2Objects1= [];
gdjs.LoadCode.GDNewText2Objects2= [];
gdjs.LoadCode.GDNewText2Objects3= [];
gdjs.LoadCode.GDNewText3Objects1= [];
gdjs.LoadCode.GDNewText3Objects2= [];
gdjs.LoadCode.GDNewText3Objects3= [];
gdjs.LoadCode.GDNewTiledSpriteObjects1= [];
gdjs.LoadCode.GDNewTiledSpriteObjects2= [];
gdjs.LoadCode.GDNewTiledSpriteObjects3= [];
gdjs.LoadCode.GDBalanceObjects1= [];
gdjs.LoadCode.GDBalanceObjects2= [];
gdjs.LoadCode.GDBalanceObjects3= [];


gdjs.LoadCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11294932);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "inc");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "inc") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11295820);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "inc");
}}

}


};gdjs.LoadCode.asyncCallback11297900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}gdjs.LoadCode.localVariables.length = 0;
}
gdjs.LoadCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 3)), (runtimeScene) => (gdjs.LoadCode.asyncCallback11297900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadCode.eventsList2 = function(runtimeScene) {

{


gdjs.LoadCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "coin", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "clck", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "iul", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "inc", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.LoadCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadCode.GDNewTextObjects1.length = 0;
gdjs.LoadCode.GDNewTextObjects2.length = 0;
gdjs.LoadCode.GDNewTextObjects3.length = 0;
gdjs.LoadCode.GDNewText2Objects1.length = 0;
gdjs.LoadCode.GDNewText2Objects2.length = 0;
gdjs.LoadCode.GDNewText2Objects3.length = 0;
gdjs.LoadCode.GDNewText3Objects1.length = 0;
gdjs.LoadCode.GDNewText3Objects2.length = 0;
gdjs.LoadCode.GDNewText3Objects3.length = 0;
gdjs.LoadCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LoadCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LoadCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.LoadCode.GDBalanceObjects1.length = 0;
gdjs.LoadCode.GDBalanceObjects2.length = 0;
gdjs.LoadCode.GDBalanceObjects3.length = 0;

gdjs.LoadCode.eventsList2(runtimeScene);
gdjs.LoadCode.GDNewTextObjects1.length = 0;
gdjs.LoadCode.GDNewTextObjects2.length = 0;
gdjs.LoadCode.GDNewTextObjects3.length = 0;
gdjs.LoadCode.GDNewText2Objects1.length = 0;
gdjs.LoadCode.GDNewText2Objects2.length = 0;
gdjs.LoadCode.GDNewText2Objects3.length = 0;
gdjs.LoadCode.GDNewText3Objects1.length = 0;
gdjs.LoadCode.GDNewText3Objects2.length = 0;
gdjs.LoadCode.GDNewText3Objects3.length = 0;
gdjs.LoadCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LoadCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LoadCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.LoadCode.GDBalanceObjects1.length = 0;
gdjs.LoadCode.GDBalanceObjects2.length = 0;
gdjs.LoadCode.GDBalanceObjects3.length = 0;


return;

}

gdjs['LoadCode'] = gdjs.LoadCode;
