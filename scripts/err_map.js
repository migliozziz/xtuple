exports.errorMap = [
  {"fromFunction":"closeAccountingYearPeriod","fromId":-1,"toFunction":"closeAccountingPeriod","toId":-1},
  {"fromFunction":"closeAccountingYearPeriod","fromId":-2,"toFunction":"closeAccountingPeriod","toId":-2},
  {"fromFunction":"closeAccountingYearPeriod","fromId":-3,"toFunction":"closeAccountingPeriod","toId":-3},
  {"fromFunction":"closeAccountingYearPeriod","fromId":-4,"toFunction":"closeAccountingPeriod","toId":-4},
  {"fromFunction":"closeAccountingYearPeriod","fromId":-5,"toFunction":"closeAccountingPeriod","toId":-5},
  {"fromFunction":"closeAccountingYearPeriod","fromId":-6,"toFunction":"closeAccountingPeriod","toId":-6},
  {"fromFunction":"convertCustomerToProspect","fromId":-1,"toFunction":"deleteCustomer","toId":-1},
  {"fromFunction":"convertCustomerToProspect","fromId":-2,"toFunction":"deleteCustomer","toId":-2},
  {"fromFunction":"convertCustomerToProspect","fromId":-3,"toFunction":"deleteCustomer","toId":-3},
  {"fromFunction":"convertCustomerToProspect","fromId":-4,"toFunction":"deleteCustomer","toId":-4},
  {"fromFunction":"convertCustomerToProspect","fromId":-5,"toFunction":"deleteCustomer","toId":-5},
  {"fromFunction":"convertProspectToCustomer","fromId":-1,"toFunction":"deleteProspect","toId":-1},
  {"fromFunction":"copyPrj","fromId":-10,"toFunction":"saveAlarm","toId":-10},
  {"fromFunction":"createARDebitMemo","fromId":-1,"toFunction":"createARCreditMemo","toId":-1},
  {"fromFunction":"deleteOpenRecurringItems","fromId":-1,"toFunction":"deleteIncident","toId":-1},
  {"fromFunction":"deleteOpenRecurringItems","fromId":-2,"toFunction":"deleteIncident","toId":-2},
  {"fromFunction":"enablePackage","fromId":-1,"toFunction":"disablePackage","toId":-1},
  {"fromFunction":"enablePackage","fromId":-2,"toFunction":"disablePackage","toId":-2},
  {"fromFunction":"issueAllBalanceToShipping","fromId":-1,"toFunction":"issueToShipping","toId":-1},
  {"fromFunction":"issueAllBalanceToShipping","fromId":-10,"toFunction":"issueToShipping","toId":-10},
  {"fromFunction":"issueAllBalanceToShipping","fromId":-12,"toFunction":"issueToShipping","toId":-12},
  {"fromFunction":"issueAllBalanceToShipping","fromId":-13,"toFunction":"issueToShipping","toId":-13},
  {"fromFunction":"issueAllBalanceToShipping","fromId":-14,"toFunction":"issueToShipping","toId":-14},
  {"fromFunction":"issueAllBalanceToShipping","fromId":-15,"toFunction":"issueToShipping","toId":-15},
  {"fromFunction":"issueAllBalanceToShipping","fromId":-20,"toFunction":"issueToShipping","toId":-20},
  {"fromFunction":"issueLineBalanceToShipping","fromId":-1,"toFunction":"issueToShipping","toId":-1},
  {"fromFunction":"issueLineBalanceToShipping","fromId":-10,"toFunction":"issueToShipping","toId":-10},
  {"fromFunction":"issueLineBalanceToShipping","fromId":-12,"toFunction":"issueToShipping","toId":-12},
  {"fromFunction":"issueLineBalanceToShipping","fromId":-13,"toFunction":"issueToShipping","toId":-13},
  {"fromFunction":"issueLineBalanceToShipping","fromId":-14,"toFunction":"issueToShipping","toId":-14},
  {"fromFunction":"issueLineBalanceToShipping","fromId":-15,"toFunction":"issueToShipping","toId":-15},
  {"fromFunction":"issueLineBalanceToShipping","fromId":-20,"toFunction":"issueToShipping","toId":-20},
  {"fromFunction":"issueToShipping","fromId":-1,"toFunction":"postInvTrans","toId":-1},
  {"fromFunction":"openAccountingYearPeriod","fromId":-1,"toFunction":"openAccountingPeriod","toId":-1},
  {"fromFunction":"postCCCashReceipt","fromId":-1,"toFunction":"createARCreditMemo","toId":-1},
  {"fromFunction":"postCCCashReceipt","fromId":-10,"toFunction":"postCCcredit","toId":-1},
  {"fromFunction":"postCountTagLocation","fromId":-1,"toFunction":"postCountTag","toId":-1},
  {"fromFunction":"postCountTagLocation","fromId":-2,"toFunction":"postCountTag","toId":-2},
  {"fromFunction":"postCountTagLocation","fromId":-3,"toFunction":"postCountTag","toId":-3},
  {"fromFunction":"postCountTagLocation","fromId":-4,"toFunction":"postCountTag","toId":-4},
  {"fromFunction":"postGLSeriesNoSumm","fromId":-4,"toFunction":"postGLSeries","toId":-4},
  {"fromFunction":"postGLSeriesNoSumm","fromId":-5,"toFunction":"postGLSeries","toId":-5},
  {"fromFunction":"postInvoice","fromId":-1,"toFunction":"insertIntoGLSeries","toId":-1},
  {"fromFunction":"postInvoice","fromId":-4,"toFunction":"insertIntoGLSeries","toId":-4},
  {"fromFunction":"postInvoice","fromId":-5,"toFunction":"postGLSeries","toId":-5},
  {"fromFunction":"postInvTrans","fromId":-3,"toFunction":"insertGLTransaction","toId":-3},
  {"fromFunction":"postInvTrans","fromId":-4,"toFunction":"insertGLTransaction","toId":-4},
  {"fromFunction":"postPoReceipt","fromId":-1,"toFunction":"postReceipt","toId":-1},
  {"fromFunction":"postPoReceipt","fromId":-2,"toFunction":"postReceipt","toId":-2},
  {"fromFunction":"postPoReceipt","fromId":-3,"toFunction":"postReceipt","toId":-3},
  {"fromFunction":"postPoReceipt","fromId":-4,"toFunction":"postReceipt","toId":-4},
  {"fromFunction":"postPoReceipt","fromId":-10,"toFunction":"postReceipt","toId":-10},
  {"fromFunction":"postPoReceipt","fromId":-11,"toFunction":"postReceipt","toId":-11},
  {"fromFunction":"postPoReceipt","fromId":-12,"toFunction":"postReceipt","toId":-12},
  {"fromFunction":"postReceipt","fromId":-1,"toFunction":"postInvTrans","toId":-1},
  {"fromFunction":"postReceipt","fromId":-2,"toFunction":"postInvTrans","toId":-2},
  {"fromFunction":"postReceipt","fromId":-3,"toFunction":"insertGLTransaction","toId":-3},
  {"fromFunction":"postReceipt","fromId":-4,"toFunction":"insertGLTransaction","toId":-4},
  {"fromFunction":"postReceipt","fromId":-20,"toFunction":"issueToShipping","toId":-1},
  {"fromFunction":"postReceipt","fromId":-21,"toFunction":"issueToShipping","toId":-10},
  {"fromFunction":"postReceipt","fromId":-22,"toFunction":"issueToShipping","toId":-12},
  {"fromFunction":"postReceipt","fromId":-23,"toFunction":"issueToShipping","toId":-13},
  {"fromFunction":"postReceipt","fromId":-24,"toFunction":"issueToShipping","toId":-14},
  {"fromFunction":"postReceipt","fromId":-25,"toFunction":"issueToShipping","toId":-15},
  {"fromFunction":"postReceipt","fromId":-26,"toFunction":"shipShipment","toId":-12},
  {"fromFunction":"postReceipt","fromId":-27,"toFunction":"shipShipment","toId":-13},
  {"fromFunction":"postReceipt","fromId":-28,"toFunction":"shipShipment","toId":-14},
  {"fromFunction":"postReceipt","fromId":-29,"toFunction":"shipShipment","toId":-15},
  {"fromFunction":"postReceipt","fromId":-30,"toFunction":"shipShipment","toId":-1},
  {"fromFunction":"postReceipt","fromId":-31,"toFunction":"shipShipment","toId":-3},
  {"fromFunction":"postReceipt","fromId":-32,"toFunction":"shipShipment","toId":-4},
  {"fromFunction":"postReceipt","fromId":-33,"toFunction":"shipShipment","toId":-5},
  {"fromFunction":"postReceipt","fromId":-34,"toFunction":"shipShipment","toId":-6},
  {"fromFunction":"postReceipt","fromId":-35,"toFunction":"shipShipment","toId":-8},
  {"fromFunction":"postReceipt","fromId":-36,"toFunction":"shipShipment","toId":-50},
  {"fromFunction":"postReceipt","fromId":-37,"toFunction":"shipShipment","toId":-99},
  {"fromFunction":"postPoReceipts","fromId":-1,"toFunction":"postPoReceipt","toId":-1},
  {"fromFunction":"postPoReceipts","fromId":-3,"toFunction":"postPoReceipt","toId":-3},
  {"fromFunction":"postPoReceipts","fromId":-4,"toFunction":"postPoReceipt","toId":-4},
  {"fromFunction":"postPoReceipts","fromId":-10,"toFunction":"postPoReceipt","toId":-10},
  {"fromFunction":"postPoReceipts","fromId":-12,"toFunction":"postPoReceipt","toId":-12},
  {"fromFunction":"postPoReturns","fromId":-1,"toFunction":"postInvTrans","toId":-1},
  {"fromFunction":"postPoReturns","fromId":-3,"toFunction":"insertGLTransaction","toId":-3},
  {"fromFunction":"postPoReturns","fromId":-4,"toFunction":"insertGLTransaction","toId":-4},
  {"fromFunction":"replaceAllVoidedChecks","fromId":-1,"toFunction":"replaceVoidedCheck","toId":-1},
  {"fromFunction":"returnItemShipments","fromId":-1,"toFunction":"postInvTrans","toId":-1},
  {"fromFunction":"shipShipment","fromId":-1,"toFunction":"postInvTrans","toId":-1},
  {"fromFunction":"shipShipment","fromId":-3,"toFunction":"insertGLTransaction","toId":-3},
  {"fromFunction":"shipShipment","fromId":-4,"toFunction":"insertGLTransaction","toId":-4},
  {"fromFunction":"splitRecurrence","fromId":-10,"toFunction":"createRecurringItems","toId":-10},
  {"fromFunction":"sufficientInventoryToShipOrder","fromId":-11,"toFunction":"sufficientInventoryToShipItem","toId":-11},
  {"fromFunction":"voidCreditMemo","fromId":-1,"toFunction":"insertIntoGLSeries","toId":-1},
  {"fromFunction":"voidCreditMemo","fromId":-4,"toFunction":"insertIntoGLSeries","toId":-4},
  {"fromFunction":"voidCreditMemo","fromId":-5,"toFunction":"postGLSeries","toId":-5},
  {"fromFunction":"voidInvoice","fromId":-1,"toFunction":"insertIntoGLSeries","toId":-1},
  {"fromFunction":"voidInvoice","fromId":-4,"toFunction":"insertIntoGLSeries","toId":-4},
  {"fromFunction":"voidInvoice","fromId":-5,"toFunction":"postGLSeries","toId":-5},
  {"fromFunction":"reserveSoLineBalance","fromId":-1,"toFunction":"reserveSoLineQty","toId":-1},
  {"fromFunction":"reserveSoLineBalance","fromId":-2,"toFunction":"reserveSoLineQty","toId":-2},
  {"fromFunction":"reserveSoLineBalance","fromId":-3,"toFunction":"reserveSoLineQty","toId":-3},
  {"fromFunction":"woClockIn","fromId":-1,"toFunction":"explodeWo","toId":-1},
  {"fromFunction":"woClockIn","fromId":-2,"toFunction":"explodeWo","toId":-2},
  {"fromFunction":"woClockIn","fromId":-3,"toFunction":"explodeWo","toId":-3},
];
