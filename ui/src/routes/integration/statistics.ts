import { type IntegrationEvent, StatisticsService } from "@peepr/core";

/**
 * Generates statistics for the provided integration events using the domain service
 */
export function generateStatistics(integrationEvents: IntegrationEvent[]) {
  return StatisticsService.generateStatistics(integrationEvents);
}
