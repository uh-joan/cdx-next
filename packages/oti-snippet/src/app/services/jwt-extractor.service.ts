export class JwtExtractorService {
  private getTokenFromAttribute(data: string, attrName: string): string {
    let jwtToken: string;

    try {
      jwtToken = JSON.parse(data)[attrName];
    } catch (e) {
      console.error(e);
      throw new Error(
        `Cannot extract token from ${data} with attribute ${attrName}`,
      );
    }

    return jwtToken;
  }

  extract(
    tokenName: string,
    tokenAttr?: string | undefined,
  ): string | undefined {
    let jwtToken: string | undefined;

    const token: string | null = localStorage.getItem(tokenName);
    if (token) {
      jwtToken = !tokenAttr
        ? token
        : this.getTokenFromAttribute(token, tokenAttr);
    }

    return jwtToken;
  }
}
