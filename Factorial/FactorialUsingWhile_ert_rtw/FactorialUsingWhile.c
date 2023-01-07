/*
 * File: FactorialUsingWhile.c
 *
 * Code generated for Simulink model 'FactorialUsingWhile'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Sat Jan 07 18:46:39 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "FactorialUsingWhile.h"
#include "FactorialUsingWhile_private.h"

/* Block states (auto storage) */
DW_FactorialUsingWhile_T FactorialUsingWhile_DW;

/* Real-time model */
RT_MODEL_FactorialUsingWhile_T FactorialUsingWhile_M_;
RT_MODEL_FactorialUsingWhile_T *const FactorialUsingWhile_M =
  &FactorialUsingWhile_M_;

/* Model step function */
void FactorialUsingWhile_step(void)
{
  int32_T s1_iter;
  boolean_T loopCond;
  real_T rtb_Add;

  /* Outputs for Iterator SubSystem: '<Root>/While Iterator Subsystem' incorporates:
   *  WhileIterator: '<S1>/While Iterator'
   */
  s1_iter = 1;

  /* Constant: '<Root>/Constant' */
  loopCond = true;
  while (loopCond && (s1_iter <= 5)) {
    /* Sum: '<S1>/Add' incorporates:
     *  Constant: '<S1>/Constant'
     *  UnitDelay: '<S1>/Unit Delay1'
     */
    rtb_Add = FactorialUsingWhile_DW.UnitDelay1_DSTATE + 1.0;

    /* Update for UnitDelay: '<S1>/Unit Delay1' incorporates:
     *  Constant: '<S1>/Constant'
     *  Sum: '<S1>/Add'
     *  UnitDelay: '<S1>/Unit Delay1'
     */
    FactorialUsingWhile_DW.UnitDelay1_DSTATE++;

    /* RelationalOperator: '<S2>/Compare' incorporates:
     *  Constant: '<Root>/Constant1'
     *  Constant: '<S2>/Constant'
     *  Sum: '<S1>/Subtract'
     */
    loopCond = (5.0 - rtb_Add > 0.0);
    s1_iter++;
  }

  /* End of Outputs for SubSystem: '<Root>/While Iterator Subsystem' */
}

/* Model initialize function */
void FactorialUsingWhile_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(FactorialUsingWhile_M, (NULL));

  /* states (dwork) */
  (void) memset((void *)&FactorialUsingWhile_DW, 0,
                sizeof(DW_FactorialUsingWhile_T));
}

/* Model terminate function */
void FactorialUsingWhile_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
