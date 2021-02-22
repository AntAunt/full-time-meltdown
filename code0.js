gdjs.GameCode = {};
gdjs.GameCode.GDNewObjectObjects1= [];
gdjs.GameCode.GDNewObjectObjects2= [];
gdjs.GameCode.GDBluePlayerObjects1= [];
gdjs.GameCode.GDBluePlayerObjects2= [];
gdjs.GameCode.GDMediumBrownMeteor3Objects1= [];
gdjs.GameCode.GDMediumBrownMeteor3Objects2= [];
gdjs.GameCode.GDFlyingEnemyObjects1= [];
gdjs.GameCode.GDFlyingEnemyObjects2= [];
gdjs.GameCode.GDBlueCrystal2Objects1= [];
gdjs.GameCode.GDBlueCrystal2Objects2= [];
gdjs.GameCode.GDSmallBluePlatformObjects1= [];
gdjs.GameCode.GDSmallBluePlatformObjects2= [];
gdjs.GameCode.GDRedFloorObjects1= [];
gdjs.GameCode.GDRedFloorObjects2= [];
gdjs.GameCode.GDGreenFlagObjects1= [];
gdjs.GameCode.GDGreenFlagObjects2= [];
gdjs.GameCode.GDLivesObjects1= [];
gdjs.GameCode.GDLivesObjects2= [];
gdjs.GameCode.GDTimerObjects1= [];
gdjs.GameCode.GDTimerObjects2= [];
gdjs.GameCode.GDPointsObjects1= [];
gdjs.GameCode.GDPointsObjects2= [];
gdjs.GameCode.GDSpeedObjects1= [];
gdjs.GameCode.GDSpeedObjects2= [];
gdjs.GameCode.GDNewObject2Objects1= [];
gdjs.GameCode.GDNewObject2Objects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlueCrystal2Objects1Objects = Hashtable.newFrom({"BlueCrystal2": gdjs.GameCode.GDBlueCrystal2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGreenFlagObjects1Objects = Hashtable.newFrom({"GreenFlag": gdjs.GameCode.GDGreenFlagObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlyingEnemyObjects1Objects = Hashtable.newFrom({"FlyingEnemy": gdjs.GameCode.GDFlyingEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.GameCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject2Objects1[i].resetTimer("Vent");
}
}{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].resetTimer("Delay");
}
}{for(var i = 0, len = gdjs.GameCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject2Objects1[i].hide();
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.GameCode.GDLivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.GameCode.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameCode.GDTimerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLivesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLivesObjects1[i].setString(gdjs.GameCode.GDLivesObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))))));
}
}{for(var i = 0, len = gdjs.GameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimerObjects1[i].setString(gdjs.GameCode.GDTimerObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))))));
}
}{for(var i = 0, len = gdjs.GameCode.GDPointsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPointsObjects1[i].setString(gdjs.GameCode.GDPointsObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Point"))))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PointTracker");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.GameCode.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.GameCode.GDSpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameCode.GDTimerObjects1);
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) / 100))));
}
}{for(var i = 0, len = gdjs.GameCode.GDPointsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPointsObjects1[i].setString("Points: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) / 100)));
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.00005);
}{runtimeScene.getVariables().getFromIndex(2).sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpeedObjects1[i].setString("Speed: " + gdjs.evtTools.common.toString(1 + gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.005) / 100));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.GameCode.GDBlueCrystal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlueCrystal2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) != 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBlueCrystal2Objects1 */
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].returnVariable(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlueCrystal2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.GameCode.GDGreenFlagObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGreenFlagObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.GameCode.GDBlueCrystal2Objects1);
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{runtimeScene.getVariables().getFromIndex(1).add(1500);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1000);
}{for(var i = 0, len = gdjs.GameCode.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlueCrystal2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].returnVariable(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.GameCode.GDBlueCrystal2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlueCrystal2Objects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyingEnemyObjects1[i].timerElapsedTime("Delay", gdjs.randomInRange(1, 1000)) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyingEnemyObjects1[k] = gdjs.GameCode.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyingEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].pauseTimer("Delay");
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyingEnemyObjects1[i].timerPaused("Delay") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyingEnemyObjects1[k] = gdjs.GameCode.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyingEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].addPolarForce(90, 50, 0);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyingEnemyObjects1[i].getY() >= 460 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyingEnemyObjects1[k] = gdjs.GameCode.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyingEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].setY(-(60));
}
}{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].resetTimer("Delay");
}
}{for(var i = 0, len = gdjs.GameCode.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyingEnemyObjects1[i].unpauseTimer("Delay");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.GameCode.GDFlyingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlyingEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.GameCode.GDLivesObjects1);
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].setPosition(5,418);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1000);
}{for(var i = 0, len = gdjs.GameCode.GDLivesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLivesObjects1[i].setString("Lives: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].returnVariable(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.GameCode.GDNewObject2Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDNewObject2Objects1[i].getVariableNumber(gdjs.GameCode.GDNewObject2Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDNewObject2Objects1[k] = gdjs.GameCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDNewObject2Objects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject2Objects1[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.GameCode.GDNewObject2Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDNewObject2Objects1[i].getVariableNumber(gdjs.GameCode.GDNewObject2Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDNewObject2Objects1[k] = gdjs.GameCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDNewObject2Objects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject2Objects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.GameCode.GDNewObject2Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDNewObject2Objects1[i].timerElapsedTime("Vent", gdjs.randomInRange(10, 40)) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDNewObject2Objects1[k] = gdjs.GameCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDNewObject2Objects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject2Objects1[i].returnVariable(gdjs.GameCode.GDNewObject2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDBluePlayerObjects1[i].getX() >= 800) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].addForce(300, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDBluePlayerObjects1[i].getX() <= 0) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].addForce(-(300), 0, 0);
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDNewObjectObjects1.length = 0;
gdjs.GameCode.GDNewObjectObjects2.length = 0;
gdjs.GameCode.GDBluePlayerObjects1.length = 0;
gdjs.GameCode.GDBluePlayerObjects2.length = 0;
gdjs.GameCode.GDMediumBrownMeteor3Objects1.length = 0;
gdjs.GameCode.GDMediumBrownMeteor3Objects2.length = 0;
gdjs.GameCode.GDFlyingEnemyObjects1.length = 0;
gdjs.GameCode.GDFlyingEnemyObjects2.length = 0;
gdjs.GameCode.GDBlueCrystal2Objects1.length = 0;
gdjs.GameCode.GDBlueCrystal2Objects2.length = 0;
gdjs.GameCode.GDSmallBluePlatformObjects1.length = 0;
gdjs.GameCode.GDSmallBluePlatformObjects2.length = 0;
gdjs.GameCode.GDRedFloorObjects1.length = 0;
gdjs.GameCode.GDRedFloorObjects2.length = 0;
gdjs.GameCode.GDGreenFlagObjects1.length = 0;
gdjs.GameCode.GDGreenFlagObjects2.length = 0;
gdjs.GameCode.GDLivesObjects1.length = 0;
gdjs.GameCode.GDLivesObjects2.length = 0;
gdjs.GameCode.GDTimerObjects1.length = 0;
gdjs.GameCode.GDTimerObjects2.length = 0;
gdjs.GameCode.GDPointsObjects1.length = 0;
gdjs.GameCode.GDPointsObjects2.length = 0;
gdjs.GameCode.GDSpeedObjects1.length = 0;
gdjs.GameCode.GDSpeedObjects2.length = 0;
gdjs.GameCode.GDNewObject2Objects1.length = 0;
gdjs.GameCode.GDNewObject2Objects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
