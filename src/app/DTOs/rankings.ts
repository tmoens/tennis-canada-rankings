interface  RankItemDTO {
  playerId: number,
  rank: number,
  points: number,
  province: string,
  name: string,
  YOB: string,
}

interface RankingsTypeDTO {
  typeCode: string,
  typeName: string,
}

interface RankingsCategoryDTO {
  categoryCode: string,
  vrRankingsType: RankingsTypeDTO,
  categoryId: string
  categoryName: string,
  loadMe: number,
  typeCode: string,
  vrURLCode: number,
}

interface RankingsPublicationDTO {
  publicationId: number,
  publicationCode: string,
  year: number,
  week: number,
  publicationDate: string,
  tcCreatedAt: string,
  rankingsCategory: RankingsCategoryDTO,
  categoryId: string,
  categoryName: string,
  loadMe: 1,
  typeCode: string,
  vrURLCode: number,
}

interface RankingsListDTO {
  publication: RankingsPublicationDTO,
  list: RankItemDTO[],
}
