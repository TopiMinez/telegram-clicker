gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDBackObjects1= [];
gdjs.ShopCode.GDBackObjects2= [];
gdjs.ShopCode.GDplus1000000Objects1= [];
gdjs.ShopCode.GDplus1000000Objects2= [];
gdjs.ShopCode.GDNewTiledSpriteObjects1= [];
gdjs.ShopCode.GDNewTiledSpriteObjects2= [];
gdjs.ShopCode.GDUpgradePriceObjects1= [];
gdjs.ShopCode.GDUpgradePriceObjects2= [];
gdjs.ShopCode.GDUpgradeClickObjects1= [];
gdjs.ShopCode.GDUpgradeClickObjects2= [];
gdjs.ShopCode.GDBalanceObjects1= [];
gdjs.ShopCode.GDBalanceObjects2= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene) {

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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "cul", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeClick"), gdjs.ShopCode.GDUpgradeClickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDUpgradeClickObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDUpgradeClickObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDUpgradeClickObjects1[k] = gdjs.ShopCode.GDUpgradeClickObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDUpgradeClickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 15000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(15000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "coin", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "clck", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cul", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeClick"), gdjs.ShopCode.GDUpgradeClickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDUpgradeClickObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDUpgradeClickObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDUpgradeClickObjects1[k] = gdjs.ShopCode.GDUpgradeClickObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDUpgradeClickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 5000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(5000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "coin", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "clck", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cul", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeClick"), gdjs.ShopCode.GDUpgradeClickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDUpgradeClickObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDUpgradeClickObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDUpgradeClickObjects1[k] = gdjs.ShopCode.GDUpgradeClickObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDUpgradeClickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 1000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "coin", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "clck", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cul", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradeClick"), gdjs.ShopCode.GDUpgradeClickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDUpgradeClickObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDUpgradeClickObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDUpgradeClickObjects1[k] = gdjs.ShopCode.GDUpgradeClickObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDUpgradeClickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 100;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(100);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "coin", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "clck", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cul", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UpgradePrice"), gdjs.ShopCode.GDUpgradePriceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDUpgradePriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgradePriceObjects1[i].getBehavior("Text").setText("Максимум");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UpgradePrice"), gdjs.ShopCode.GDUpgradePriceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDUpgradePriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgradePriceObjects1[i].getBehavior("Text").setText("15000 арман-коинов");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UpgradePrice"), gdjs.ShopCode.GDUpgradePriceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDUpgradePriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgradePriceObjects1[i].getBehavior("Text").setText("5000 арман-коинов");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UpgradePrice"), gdjs.ShopCode.GDUpgradePriceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDUpgradePriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgradePriceObjects1[i].getBehavior("Text").setText("1000 арман-коинов");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.ShopCode.GDBalanceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBalanceObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDBackObjects1.length = 0;
gdjs.ShopCode.GDBackObjects2.length = 0;
gdjs.ShopCode.GDplus1000000Objects1.length = 0;
gdjs.ShopCode.GDplus1000000Objects2.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ShopCode.GDUpgradePriceObjects1.length = 0;
gdjs.ShopCode.GDUpgradePriceObjects2.length = 0;
gdjs.ShopCode.GDUpgradeClickObjects1.length = 0;
gdjs.ShopCode.GDUpgradeClickObjects2.length = 0;
gdjs.ShopCode.GDBalanceObjects1.length = 0;
gdjs.ShopCode.GDBalanceObjects2.length = 0;

gdjs.ShopCode.eventsList0(runtimeScene);

return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
