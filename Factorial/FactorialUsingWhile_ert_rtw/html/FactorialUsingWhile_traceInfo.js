function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["FactorialUsingWhile:7"] = "FactorialUsingWhile.c:42";
	/* <Root>/Constant1 */
	this.urlHashMap["FactorialUsingWhile:8"] = "FactorialUsingWhile.c:59";
	/* <Root>/Display */
	this.urlHashMap["FactorialUsingWhile:9"] = "msg=rtwMsg_reducedBlock&block=FactorialUsingWhile:9";
	/* <Root>/While Iterator
Subsystem */
	this.urlHashMap["FactorialUsingWhile:2"] = "FactorialUsingWhile.c:37,67";
	/* <S1>/Add */
	this.urlHashMap["FactorialUsingWhile:62"] = "FactorialUsingWhile.c:45,53";
	/* <S1>/Constant */
	this.urlHashMap["FactorialUsingWhile:48"] = "FactorialUsingWhile.c:46,52";
	/* <S1>/Product */
	this.urlHashMap["FactorialUsingWhile:15"] = "msg=rtwMsg_reducedBlock&block=FactorialUsingWhile:15";
	/* <S1>/Subtract */
	this.urlHashMap["FactorialUsingWhile:39"] = "FactorialUsingWhile.c:61";
	/* <S1>/Unit Delay */
	this.urlHashMap["FactorialUsingWhile:13"] = "msg=rtwMsg_reducedBlock&block=FactorialUsingWhile:13";
	/* <S1>/Unit Delay1 */
	this.urlHashMap["FactorialUsingWhile:45"] = "FactorialUsingWhile.c:47,51,54&FactorialUsingWhile.h:41";
	/* <S1>/While Iterator */
	this.urlHashMap["FactorialUsingWhile:5"] = "FactorialUsingWhile.c:38";
	/* <S2>/Compare */
	this.urlHashMap["FactorialUsingWhile:10:2"] = "FactorialUsingWhile.c:58";
	/* <S2>/Constant */
	this.urlHashMap["FactorialUsingWhile:10:3"] = "FactorialUsingWhile.c:60";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "FactorialUsingWhile"};
	this.sidHashMap["FactorialUsingWhile"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "FactorialUsingWhile:2"};
	this.sidHashMap["FactorialUsingWhile:2"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "FactorialUsingWhile:10"};
	this.sidHashMap["FactorialUsingWhile:10"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "FactorialUsingWhile:7"};
	this.sidHashMap["FactorialUsingWhile:7"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "FactorialUsingWhile:8"};
	this.sidHashMap["FactorialUsingWhile:8"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "FactorialUsingWhile:9"};
	this.sidHashMap["FactorialUsingWhile:9"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/While Iterator Subsystem"] = {sid: "FactorialUsingWhile:2"};
	this.sidHashMap["FactorialUsingWhile:2"] = {rtwname: "<Root>/While Iterator Subsystem"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "FactorialUsingWhile:3"};
	this.sidHashMap["FactorialUsingWhile:3"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/IC"] = {sid: "FactorialUsingWhile:4"};
	this.sidHashMap["FactorialUsingWhile:4"] = {rtwname: "<S1>/IC"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "FactorialUsingWhile:62"};
	this.sidHashMap["FactorialUsingWhile:62"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Compare To Zero"] = {sid: "FactorialUsingWhile:10"};
	this.sidHashMap["FactorialUsingWhile:10"] = {rtwname: "<S1>/Compare To Zero"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "FactorialUsingWhile:48"};
	this.sidHashMap["FactorialUsingWhile:48"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "FactorialUsingWhile:15"};
	this.sidHashMap["FactorialUsingWhile:15"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "FactorialUsingWhile:39"};
	this.sidHashMap["FactorialUsingWhile:39"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "FactorialUsingWhile:13"};
	this.sidHashMap["FactorialUsingWhile:13"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Unit Delay1"] = {sid: "FactorialUsingWhile:45"};
	this.sidHashMap["FactorialUsingWhile:45"] = {rtwname: "<S1>/Unit Delay1"};
	this.rtwnameHashMap["<S1>/While Iterator"] = {sid: "FactorialUsingWhile:5"};
	this.sidHashMap["FactorialUsingWhile:5"] = {rtwname: "<S1>/While Iterator"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "FactorialUsingWhile:6"};
	this.sidHashMap["FactorialUsingWhile:6"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/u"] = {sid: "FactorialUsingWhile:10:1"};
	this.sidHashMap["FactorialUsingWhile:10:1"] = {rtwname: "<S2>/u"};
	this.rtwnameHashMap["<S2>/Compare"] = {sid: "FactorialUsingWhile:10:2"};
	this.sidHashMap["FactorialUsingWhile:10:2"] = {rtwname: "<S2>/Compare"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "FactorialUsingWhile:10:3"};
	this.sidHashMap["FactorialUsingWhile:10:3"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/y"] = {sid: "FactorialUsingWhile:10:5"};
	this.sidHashMap["FactorialUsingWhile:10:5"] = {rtwname: "<S2>/y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
