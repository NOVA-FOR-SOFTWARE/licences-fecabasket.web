import type { Club } from "@services/clubs/entities/Club.entity";

export function groupClubsByLocality(clubs: Club[]): Record<string, Club[]> {
  return clubs.reduce((acc, club) => {
    if (!acc[club.locality]) {
      acc[club.locality] = [];
    }
    acc[club.locality].push(club);
    return acc;
  }, {} as Record<string, Club[]>);
}
