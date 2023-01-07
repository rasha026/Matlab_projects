/*
 * File: untitled.c
 *
 * Code generated for Simulink model 'untitled'.
 *
 * Model version                  : 1.0
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Sat Jan 07 18:35:14 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "untitled.h"
#include "untitled_private.h"

/* Block states (auto storage) */
DW_untitled_T untitled_DW;

/* Real-time model */
RT_MODEL_untitled_T untitled_M_;
RT_MODEL_untitled_T *const untitled_M = &untitled_M_;

/* Model step function */
void untitled_step(void)
{
  int32_T s1_iter;
  boolean_T rtb_Compare;

  /* Outputs for Iterator SubSystem: '<Root>/While Iterator Subsystem' incorporates:
   *  WhileIterator: '<S1>/While Iterator'
   */
  s1_iter = 1;

  /* Constant: '<Root>/Constant' */
  rtb_Compare = true;
  while (rtb_Compare && (s1_iter <= 5)) {
    /* RelationalOperator: '<S2>/Compare' incorporates:
     *  Constant: '<S2>/Constant'
     *  UnitDelay: '<S1>/Unit Delay1'
     */
    rtb_Compare = (untitled_DW.UnitDelay1_DSTATE > 0.0);

    /* Update for UnitDelay: '<S1>/Unit Delay1' incorporates:
     *  Constant: '<Root>/Constant1'
     *  Sum: '<S1>/Subtract'
     *  UnitDelay: '<S1>/Unit Delay1'
     *  UnitDelay: '<S1>/Unit Delay2'
     *  UnitDelay: '<S1>/Unit Delay3'
     */
    untitled_DW.UnitDelay1_DSTATE = ((6.0 - untitled_DW.UnitDelay2_DSTATE) +
      untitled_DW.UnitDelay1_DSTATE) - untitled_DW.UnitDelay3_DSTATE;

    /* Update for UnitDelay: '<S1>/Unit Delay2' incorporates:
     *  Constant: '<S1>/Constant'
     */
    untitled_DW.UnitDelay2_DSTATE = 1.0;

    /* Update for UnitDelay: '<S1>/Unit Delay3' incorporates:
     *  Constant: '<Root>/Constant1'
     */
    untitled_DW.UnitDelay3_DSTATE = 6.0;
    s1_iter++;
  }

  /* End of Outputs for SubSystem: '<Root>/While Iterator Subsystem' */
}

/* Model initialize function */
void untitled_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(untitled_M, (NULL));

  /* states (dwork) */
  (void) memset((void *)&untitled_DW, 0,
                sizeof(DW_untitled_T));
}

/* Model terminate function */
void untitled_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
