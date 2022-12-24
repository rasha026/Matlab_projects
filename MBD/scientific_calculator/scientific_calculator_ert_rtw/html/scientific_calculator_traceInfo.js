function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["scientific_calculator:5"] = "scientific_calculator.c:37,45,53,61&scientific_calculator.h:41";
	/* <Root>/In2 */
	this.urlHashMap["scientific_calculator:6"] = "scientific_calculator.c:38,46,54,62&scientific_calculator.h:42";
	/* <Root>/Add */
	this.urlHashMap["scientific_calculator:1"] = "scientific_calculator.c:39";
	/* <Root>/Divide */
	this.urlHashMap["scientific_calculator:4"] = "scientific_calculator.c:63";
	/* <Root>/Product */
	this.urlHashMap["scientific_calculator:3"] = "scientific_calculator.c:55";
	/* <Root>/Subtract */
	this.urlHashMap["scientific_calculator:2"] = "scientific_calculator.c:47";
	/* <Root>/Out1 */
	this.urlHashMap["scientific_calculator:7"] = "scientific_calculator.c:36&scientific_calculator.h:47";
	/* <Root>/Out2 */
	this.urlHashMap["scientific_calculator:8"] = "scientific_calculator.c:44&scientific_calculator.h:48";
	/* <Root>/Out3 */
	this.urlHashMap["scientific_calculator:9"] = "scientific_calculator.c:52&scientific_calculator.h:49";
	/* <Root>/Out4 */
	this.urlHashMap["scientific_calculator:10"] = "scientific_calculator.c:60&scientific_calculator.h:50";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "scientific_calculator"};
	this.sidHashMap["scientific_calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "scientific_calculator:5"};
	this.sidHashMap["scientific_calculator:5"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "scientific_calculator:6"};
	this.sidHashMap["scientific_calculator:6"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "scientific_calculator:1"};
	this.sidHashMap["scientific_calculator:1"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "scientific_calculator:4"};
	this.sidHashMap["scientific_calculator:4"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<Root>/Product"] = {sid: "scientific_calculator:3"};
	this.sidHashMap["scientific_calculator:3"] = {rtwname: "<Root>/Product"};
	this.rtwnameHashMap["<Root>/Subtract"] = {sid: "scientific_calculator:2"};
	this.sidHashMap["scientific_calculator:2"] = {rtwname: "<Root>/Subtract"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "scientific_calculator:7"};
	this.sidHashMap["scientific_calculator:7"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "scientific_calculator:8"};
	this.sidHashMap["scientific_calculator:8"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "scientific_calculator:9"};
	this.sidHashMap["scientific_calculator:9"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "scientific_calculator:10"};
	this.sidHashMap["scientific_calculator:10"] = {rtwname: "<Root>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
