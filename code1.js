gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDArmanObjects1= [];
gdjs.MainCode.GDArmanObjects2= [];
gdjs.MainCode.GDMetalRedBarObjects1= [];
gdjs.MainCode.GDMetalRedBarObjects2= [];
gdjs.MainCode.GDShopObjects1= [];
gdjs.MainCode.GDShopObjects2= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDLevelObjects1= [];
gdjs.MainCode.GDLevelObjects2= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects1= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects2= [];


gdjs.MainCode.asyncCallback10935124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Arman"), gdjs.MainCode.GDArmanObjects2);

{for(var i = 0, len = gdjs.MainCode.GDArmanObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDArmanObjects2[i].getBehavior("Resizable").setSize(386, 524);
}
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDArmanObjects1) asyncObjectsList.addObject("Arman", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MainCode.asyncCallback10935124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.MainCode.GDShopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDShopObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDShopObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDShopObjects1[k] = gdjs.MainCode.GDShopObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDShopObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.MainCode.GDOnScreenControlsButtonObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDOnScreenControlsButtonObjects1[i].SetLabelText("+" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + " за клик", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arman"), gdjs.MainCode.GDArmanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDArmanObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDArmanObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDArmanObjects1[k] = gdjs.MainCode.GDArmanObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDArmanObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDArmanObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "coin", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.MainCode.GDArmanObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDArmanObjects1[i].getBehavior("Resizable").setSize(375, 515);
}
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDArmanObjects1.length = 0;
gdjs.MainCode.GDArmanObjects2.length = 0;
gdjs.MainCode.GDMetalRedBarObjects1.length = 0;
gdjs.MainCode.GDMetalRedBarObjects2.length = 0;
gdjs.MainCode.GDShopObjects1.length = 0;
gdjs.MainCode.GDShopObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDLevelObjects1.length = 0;
gdjs.MainCode.GDLevelObjects2.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects2.length = 0;

gdjs.MainCode.eventsList1(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
