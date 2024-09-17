gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDBackObjects1= [];
gdjs.ShopCode.GDBackObjects2= [];
gdjs.ShopCode.GDBackObjects3= [];
gdjs.ShopCode.GDplus1000000Objects1= [];
gdjs.ShopCode.GDplus1000000Objects2= [];
gdjs.ShopCode.GDplus1000000Objects3= [];
gdjs.ShopCode.GDNewTiledSpriteObjects1= [];
gdjs.ShopCode.GDNewTiledSpriteObjects2= [];
gdjs.ShopCode.GDNewTiledSpriteObjects3= [];
gdjs.ShopCode.GDNewTextObjects1= [];
gdjs.ShopCode.GDNewTextObjects2= [];
gdjs.ShopCode.GDNewTextObjects3= [];
gdjs.ShopCode.GDplus1000001Objects1= [];
gdjs.ShopCode.GDplus1000001Objects2= [];
gdjs.ShopCode.GDplus1000001Objects3= [];


gdjs.ShopCode.asyncCallback10532260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ShopCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.storage.deleteElementFromJSONFile("storage", "coin");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}gdjs.ShopCode.localVariables.length = 0;
}
gdjs.ShopCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.ShopCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.ShopCode.asyncCallback10532260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ShopCode.asyncCallback8612212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ShopCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.ShopCode.GDNewTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "toggle", 1);
}{for(var i = 0, len = gdjs.ShopCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDNewTextObjects2[i].getBehavior("Text").setText("...");
}
}
{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ShopCode.localVariables.length = 0;
}
gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ShopCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.ShopCode.asyncCallback8612212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plus1000000"), gdjs.ShopCode.GDplus1000000Objects1);
{for(var i = 0, len = gdjs.ShopCode.GDplus1000000Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDplus1000000Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ShopCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBackObjects1[k] = gdjs.ShopCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("plus1000000"), gdjs.ShopCode.GDplus1000000Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDplus1000000Objects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDplus1000000Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDplus1000000Objects1[k] = gdjs.ShopCode.GDplus1000000Objects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDplus1000000Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "bro"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "bro");
}
{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "toggle", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("plus1000001"), gdjs.ShopCode.GDplus1000001Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDplus1000001Objects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDplus1000001Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDplus1000001Objects1[k] = gdjs.ShopCode.GDplus1000001Objects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDplus1000001Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 100;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(100);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "click", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "coin", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plus1000001"), gdjs.ShopCode.GDplus1000001Objects1);
{for(var i = 0, len = gdjs.ShopCode.GDplus1000001Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDplus1000001Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDBackObjects1.length = 0;
gdjs.ShopCode.GDBackObjects2.length = 0;
gdjs.ShopCode.GDBackObjects3.length = 0;
gdjs.ShopCode.GDplus1000000Objects1.length = 0;
gdjs.ShopCode.GDplus1000000Objects2.length = 0;
gdjs.ShopCode.GDplus1000000Objects3.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.ShopCode.GDNewTextObjects1.length = 0;
gdjs.ShopCode.GDNewTextObjects2.length = 0;
gdjs.ShopCode.GDNewTextObjects3.length = 0;
gdjs.ShopCode.GDplus1000001Objects1.length = 0;
gdjs.ShopCode.GDplus1000001Objects2.length = 0;
gdjs.ShopCode.GDplus1000001Objects3.length = 0;

gdjs.ShopCode.eventsList2(runtimeScene);

return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
