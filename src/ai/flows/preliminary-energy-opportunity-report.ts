'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating a preliminary energy opportunity report.
 *
 * - generatePreliminaryEnergyOpportunityReport - A function that handles the report generation process.
 * - PreliminaryEnergyOpportunityReportInput - The input type for the generatePreliminaryEnergyOpportunityReport function.
 * - PreliminaryEnergyOpportunityReportOutput - The return type for the generatePreliminaryEnergyOpportunityReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PreliminaryEnergyOpportunityReportInputSchema = z.object({
  buildingType: z
    .string()
    .describe('The type of commercial building (e.g., Hotel, Hospital, Factory, Office Complex).'),
  monthlyEnergyBill: z.number().describe('The average monthly electricity bill in Nigerian Naira.'),
  businessName: z.string().optional().describe('The name of the business, if available.'),
});

export type PreliminaryEnergyOpportunityReportInput = z.infer<
  typeof PreliminaryEnergyOpportunityReportInputSchema
>;

const PreliminaryEnergyOpportunityReportOutputSchema = z.object({
  reportTitle: z
    .string()
    .describe('A title for the preliminary energy opportunity report, personalized for the business.'),
  summary: z.string().describe('An overall summary of the potential energy savings and benefits.'),
  potentialSavingsPercentage: z
    .number()
    .describe('The estimated percentage of energy cost reduction (e.g., 25).'),
  potentialSavingsNairaMonthly: z
    .number()
    .describe('The estimated monthly energy cost savings in Nigerian Naira.'),
  recommendedServices: z
    .array(z.string())
    .describe('A list of recommended GoGreen Energy Advisory services relevant to the client.'),
  nextSteps: z
    .string()
    .describe('A clear call to action encouraging the client to request a detailed audit or consultation.'),
});

export type PreliminaryEnergyOpportunityReportOutput = z.infer<
  typeof PreliminaryEnergyOpportunityReportOutputSchema
>;

export async function generatePreliminaryEnergyOpportunityReport(
  input: PreliminaryEnergyOpportunityReportInput
): Promise<PreliminaryEnergyOpportunityReportOutput> {
  return preliminaryEnergyOpportunityReportFlow(input);
}

const preliminaryReportPrompt = ai.definePrompt({
  name: 'preliminaryEnergyOpportunityReportPrompt',
  input: {schema: PreliminaryEnergyOpportunityReportInputSchema},
  output: {schema: PreliminaryEnergyOpportunityReportOutputSchema},
  prompt: `You are an expert energy consultant from GoGreen Energy Advisory, a company that helps Nigerian businesses reduce electricity and diesel costs through data-driven energy analysis. You are tasked with generating a preliminary energy opportunity report for a potential client.

The client's building type is: {{{buildingType}}}
Their average monthly energy bill is approximately: NGN {{{monthlyEnergyBill}}}
{{#if businessName}}The business name is: {{{businessName}}}.{{/if}}

Based on this information, provide a concise, high-level report outlining potential energy savings and recommended next steps.

Your report should:
- Estimate the potential energy cost reduction percentage.
- Estimate the potential monthly energy cost savings in Nigerian Naira.
- Recommend relevant services from GoGreen Energy Advisory, such as:
  - Energy Audits for Commercial Buildings
  - Solar & Diesel Reduction Feasibility Studies
  - Cooling & HVAC Optimization
  - Lighting Efficiency Upgrades
  - Building Energy Analytics
- Conclude with a clear call to action to engage with GoGreen Energy Advisory for a full audit or consultation.

Assume a conservative but impactful saving potential. Ensure the output strictly adheres to the JSON schema provided.
`,
});

const preliminaryEnergyOpportunityReportFlow = ai.defineFlow(
  {
    name: 'preliminaryEnergyOpportunityReportFlow',
    inputSchema: PreliminaryEnergyOpportunityReportInputSchema,
    outputSchema: PreliminaryEnergyOpportunityReportOutputSchema,
  },
  async input => {
    const {output} = await preliminaryReportPrompt(input);
    return output!;
  }
);
