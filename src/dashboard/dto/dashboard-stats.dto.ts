import { ApiProperty } from '@nestjs/swagger';

class CountStats {
  @ApiProperty({ example: 10 })
  total: number;

  @ApiProperty({ example: 7 })
  visible: number;

  @ApiProperty({ example: 3 })
  hidden: number;
}

class UserStats {
  @ApiProperty({ example: 5 })
  total: number;

  @ApiProperty({ example: 4 })
  active: number;

  @ApiProperty({ example: 1 })
  deactivated: number;
}

export class DashboardStatsDto {
  @ApiProperty({ type: CountStats })
  articles: CountStats;

  @ApiProperty({ type: CountStats })
  seminars: CountStats;

  @ApiProperty({ type: CountStats })
  reviews: CountStats;

  @ApiProperty({ type: UserStats })
  users: UserStats;
}
