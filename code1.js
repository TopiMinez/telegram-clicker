gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDArmanObjects1= [];
gdjs.MainCode.GDArmanObjects2= [];
gdjs.MainCode.GDArmanObjects3= [];
gdjs.MainCode.GDMetalRedBarObjects1= [];
gdjs.MainCode.GDMetalRedBarObjects2= [];
gdjs.MainCode.GDMetalRedBarObjects3= [];
gdjs.MainCode.GDShopObjects1= [];
gdjs.MainCode.GDShopObjects2= [];
gdjs.MainCode.GDShopObjects3= [];
gdjs.MainCode.GDLevelObjects1= [];
gdjs.MainCode.GDLevelObjects2= [];
gdjs.MainCode.GDLevelObjects3= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects1= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects2= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects3= [];
gdjs.MainCode.GDOnScreenControlsButton2Objects1= [];
gdjs.MainCode.GDOnScreenControlsButton2Objects2= [];
gdjs.MainCode.GDOnScreenControlsButton2Objects3= [];
gdjs.MainCode.GDAxmedObjects1= [];
gdjs.MainCode.GDAxmedObjects2= [];
gdjs.MainCode.GDAxmedObjects3= [];
gdjs.MainCode.GDBalanceObjects1= [];
gdjs.MainCode.GDBalanceObjects2= [];
gdjs.MainCode.GDBalanceObjects3= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10505932);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9107836);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "inc");
}}

}


};gdjs.MainCode.asyncCallback10894836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Axmed"), gdjs.MainCode.GDAxmedObjects2);

{for(var i = 0, len = gdjs.MainCode.GDAxmedObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDAxmedObjects2[i].getBehavior("Resizable").setSize(386, 524);
}
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDAxmedObjects1) asyncObjectsList.addObject("Axmed", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MainCode.asyncCallback10894836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.asyncCallback10978100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Arman"), gdjs.MainCode.GDArmanObjects2);

{for(var i = 0, len = gdjs.MainCode.GDArmanObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDArmanObjects2[i].getBehavior("Resizable").setSize(386, 524);
}
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDArmanObjects1) asyncObjectsList.addObject("Arman", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MainCode.asyncCallback10978100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDAxmedObjects1Objects = Hashtable.newFrom({"Axmed": gdjs.MainCode.GDAxmedObjects1});
gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainCode.eventsList0(runtimeScene);
}


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
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.MainCode.GDBalanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.MainCode.GDOnScreenControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton2"), gdjs.MainCode.GDOnScreenControlsButton2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBalanceObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDOnScreenControlsButtonObjects1[i].SetLabelText("+" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + " за клик", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDOnScreenControlsButton2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDOnScreenControlsButton2Objects1[i].SetLabelText("+" + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + " в сек", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Axmed"), gdjs.MainCode.GDAxmedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDAxmedObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDAxmedObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDAxmedObjects1[k] = gdjs.MainCode.GDAxmedObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDAxmedObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDAxmedObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "coin", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.MainCode.GDAxmedObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDAxmedObjects1[i].getBehavior("Resizable").setSize(375, 515);
}
}
{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

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
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(999);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMetalRedBarObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMetalRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 1000 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMetalRedBarObjects1[k] = gdjs.MainCode.GDMetalRedBarObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMetalRedBarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11743708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arman"), gdjs.MainCode.GDArmanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.MainCode.GDLevelObjects1);
/* Reuse gdjs.MainCode.GDMetalRedBarObjects1 */
gdjs.MainCode.GDAxmedObjects1.length = 0;

{for(var i = 0, len = gdjs.MainCode.GDLevelObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDLevelObjects1[i].getBehavior("Text").setText("Ахмед из Узбекистана");
}
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects1[i].SetMaxValue(10000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDArmanObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDArmanObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDAxmedObjects1Objects, 161, 314, "");
}{for(var i = 0, len = gdjs.MainCode.GDAxmedObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDAxmedObjects1[i].getBehavior("Resizable").setSize(386, 524);
}
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDArmanObjects1.length = 0;
gdjs.MainCode.GDArmanObjects2.length = 0;
gdjs.MainCode.GDArmanObjects3.length = 0;
gdjs.MainCode.GDMetalRedBarObjects1.length = 0;
gdjs.MainCode.GDMetalRedBarObjects2.length = 0;
gdjs.MainCode.GDMetalRedBarObjects3.length = 0;
gdjs.MainCode.GDShopObjects1.length = 0;
gdjs.MainCode.GDShopObjects2.length = 0;
gdjs.MainCode.GDShopObjects3.length = 0;
gdjs.MainCode.GDLevelObjects1.length = 0;
gdjs.MainCode.GDLevelObjects2.length = 0;
gdjs.MainCode.GDLevelObjects3.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects3.length = 0;
gdjs.MainCode.GDOnScreenControlsButton2Objects1.length = 0;
gdjs.MainCode.GDOnScreenControlsButton2Objects2.length = 0;
gdjs.MainCode.GDOnScreenControlsButton2Objects3.length = 0;
gdjs.MainCode.GDAxmedObjects1.length = 0;
gdjs.MainCode.GDAxmedObjects2.length = 0;
gdjs.MainCode.GDAxmedObjects3.length = 0;
gdjs.MainCode.GDBalanceObjects1.length = 0;
gdjs.MainCode.GDBalanceObjects2.length = 0;
gdjs.MainCode.GDBalanceObjects3.length = 0;

gdjs.MainCode.eventsList3(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
