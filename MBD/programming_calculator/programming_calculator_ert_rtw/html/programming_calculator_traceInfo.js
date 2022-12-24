function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["programming_calculator:5"] = "programming_calculator.c:37,45,53,61&programming_calculator.h:41";
	/* <Root>/In2 */
	this.urlHashMap["programming_calculator:6"] = "programming_calculator.c:38,46,54,62&programming_calculator.h:42";
	/* <Root>/Logical
Operator */
	this.urlHashMap["programming_calculator:1"] = "programming_calculator.c:39";
	/* <Root>/Logical
Operator1 */
	this.urlHashMap["programming_calculator:2"] = "programming_calculator.c:47";
	/* <Root>/Logical
Operator2 */
	this.urlHashMap["programming_calculator:3"] = "programming_calculator.c:55";
	/* <Root>/Logical
Operator3 */
	this.urlHashMap["programming_calculator:4"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=programming_calculator:4";
	/* <Root>/Out1 */
	this.urlHashMap["programming_calculator:7"] = "programming_calculator.c:36&programming_calculator.h:47";
	/* <Root>/Out2 */
	this.urlHashMap["programming_calculator:8"] = "programming_calculator.c:44&programming_calculator.h:48";
	/* <Root>/Out3 */
	this.urlHashMap["programming_calculator:9"] = "programming_calculator.c:52&programming_calculator.h:49";
	/* <Root>/Out4 */
	this.urlHashMap["programming_calculator:10"] = "programming_calculator.c:60&programming_calculator.h:50";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "programming_calculator"};
	this.sidHashMap["programming_calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "programming_calculator:5"};
	this.sidHashMap["programming_calculator:5"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "programming_calculator:6"};
	this.sidHashMap["programming_calculator:6"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Logical Operator"] = {sid: "programming_calculator:1"};
	this.sidHashMap["programming_calculator:1"] = {rtwname: "<Root>/Logical Operator"};
	this.rtwnameHashMap["<Root>/Logical Operator1"] = {sid: "programming_calculator:2"};
	this.sidHashMap["programming_calculator:2"] = {rtwname: "<Root>/Logical Operator1"};
	this.rtwnameHashMap["<Root>/Logical Operator2"] = {sid: "programming_calculator:3"};
	this.sidHashMap["programming_calculator:3"] = {rtwname: "<Root>/Logical Operator2"};
	this.rtwnameHashMap["<Root>/Logical Operator3"] = {sid: "programming_calculator:4"};
	this.sidHashMap["programming_calculator:4"] = {rtwname: "<Root>/Logical Operator3"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "programming_calculator:7"};
	this.sidHashMap["programming_calculator:7"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "programming_calculator:8"};
	this.sidHashMap["programming_calculator:8"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "programming_calculator:9"};
	this.sidHashMap["programming_calculator:9"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "programming_calculator:10"};
	this.sidHashMap["programming_calculator:10"] = {rtwname: "<Root>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
