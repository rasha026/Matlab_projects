/*
 * File: scientific_calculator.c
 *
 * Code generated for Simulink model 'scientific_calculator'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Sat Dec 24 18:29:18 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "scientific_calculator.h"
#include "scientific_calculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_scientific_calculator_T scientific_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_scientific_calculator_T scientific_calculator_Y;

/* Real-time model */
RT_MODEL_scientific_calculato_T scientific_calculator_M_;
RT_MODEL_scientific_calculato_T *const scientific_calculator_M =
  &scientific_calculator_M_;

/* Model step function */
void scientific_calculator_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<Root>/Add'
   */
  scientific_calculator_Y.Out1 = scientific_calculator_U.In1 +
    scientific_calculator_U.In2;

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<Root>/Subtract'
   */
  scientific_calculator_Y.Out2 = scientific_calculator_U.In1 -
    scientific_calculator_U.In2;

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<Root>/Product'
   */
  scientific_calculator_Y.Out3 = scientific_calculator_U.In1 *
    scientific_calculator_U.In2;

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<Root>/Divide'
   */
  scientific_calculator_Y.Out4 = scientific_calculator_U.In1 /
    scientific_calculator_U.In2;
}

/* Model initialize function */
void scientific_calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(scientific_calculator_M, (NULL));

  /* external inputs */
  (void)memset((void *)&scientific_calculator_U, 0, sizeof
               (ExtU_scientific_calculator_T));

  /* external outputs */
  (void) memset((void *)&scientific_calculator_Y, 0,
                sizeof(ExtY_scientific_calculator_T));
}

/* Model terminate function */
void scientific_calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
