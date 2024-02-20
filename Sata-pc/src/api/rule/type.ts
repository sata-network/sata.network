
export interface approveApplication {
    fromId?: string | number,
    limit: number,
    type?: number,
    tokenId?: number | string,
    recordId?: string | number,
    collectionId?: string | number
}

export interface authorInfo {
    authorId?: string | number,
    collectionId?: string | number
    nftType?: string | number
}

export interface nftDetails {
    recordId?: string | number,
    name?: string,
    description?: string,
    urls?: string,
    sellOrderId?: string,
    offerOrderId?: string
}
export interface pendingAuction {
    limit?: string | number,
    type?: string | number,
}
export interface historyApplication {
    fromId?: string | number,
    limit?: string | number,
    type?: string | number,
    fromYear?: string | number
}

export interface addressBeforeType {
    address: string,
    chain: string | number
}

export interface setDefaultAddress {
    chainId?: string,
    chainType?: string,
    address: string,
    message?: string,
    nonce: string,
    signature: string
}
export interface supportFiat {
    channelId?: string | number
}
export interface paymentMethod {
    fiat?: string,
    coin?: string,
    channelId?: string | number,
    quantity?: string | number
    blockchain?: string
    paymentMethodId?: string | number
    walletAddress?: string | number
    price?: string | number
    fiatAmount?: string | number
    captchaId?: string | number
    captchaResponse?: string | number
    challenge?: string | number,
    network?: string | number

}
export interface fixedOrder {
    recordId: string,
    fromId: string,
    status?: string | number,
    limit?: string | number
}
export interface createCreditOrder {
    recordId: string,
    fiat: string,
    quantity: string,
    paymentMethodId: string,
    token?: string,
    price?: string,
    channelId?: string
}
export interface createOrder {
    recordId: string,
    quantity: string,
    fee: string,
    token?: string,
    price: string
}
export interface getfixedOrder {
    recordId?: string,
    fromId?: string | number,
    limit?: string | number,
    status?: string | number
}
export interface banxaPrice {
    source: string,
    target: string | number,
    paymentMethodId: string | number
}
export interface videoList {
    cursor?: string,
    maxCount?: number | string,
    firstLoad?: boolean,
    hasBeenSold?: string | number
}
export interface orderDetails {
    orderId: string | number,
    txHash?: string,
    walletAddress?: string
}
export interface participate {
    issue: string | number
}
export interface activityFlow {
    issue: string | number,
    status?: string | number,
    limit?: string | number
}
export interface worksSoldDetail {
    tokenId?: string | number
}
export interface updateName {
    name: string
}
export interface createNftWhite {
    name: string,
    conact: string,
    socialMedia: string,
    introduction: string
}
export interface getVideoList {
    cursor?: string,
    maxCount?: string | number
}
export interface createProduct {
    worksId: string,
    coverImageUrl: string,
    shareUrl: string,
    videoDescription: string,
    title: string,
    price: string,
    issuesQty: string | number,
    auctionToken: string,
    worksCreateTime: string | number,
    address?: string,
    endTime: string,
    startTime: string,
    embedHtml: string,
    embedLink: string,
    fixedSubType?: number | string
}

export interface getvideoInfo {
    worksId?: string
}
export interface queryChannel {
    countryCode: string
}
export interface orderRefund {
    orderId?: string | number,
    txHash: string
}
export interface registeGeev3 {
    captchaId: string
}
export interface paymentMethodList {
    countryCode?: string | number
}
export interface mintHash {
    collectionId?: string | number,
    txHash?: string
}
export interface soldNft {
    collectionId: string | number,
    address: string,
    chainType: string,
    chainId: string | number
}
export interface myFollowing {
    fromId?: string | number,
    limit?: string | number
}
export interface followSend {
    userId: string | number
}
export interface collectedNft {
    userId: string | number,
    fromId?: string | number,
    limit?: string | number
}
export interface collectedNftAdd {
    collectionId?: number | string,
    recordId?: number | string
}

export interface unbindAddress {
    addressId?: number | string
}
export interface getValidate {
    validateType?: string | number,
    collectionId?: string | number,
    recordId?: number,
    projectId?: number,
    perkId?: number
}
export interface recordIdList {
    recordId?: number,
    holdCheck?: number | string
}
export interface addressBefore {
    address: string,
    validateType?: string | number,
    projectId?: string | number,
    collectionId?: string | number,
    chainId: number,
    recordId: string,
}
export interface tokenAddress {
    requestId: string,
    signature: string,
}
export interface projectItems {
    projectId?: string,
    nftSource?: string | number,
    sortBy?: string | number,
    mintStatus?: string | number,
    name?: string,
    cursor?: string | number,
    limit?: string | number,
    from?: string | number,
    collectionId?: string | number,
    holdCheck?: string | number
}
export interface tokenDetail {
    collectionId: string | number,
    recordId: string | number,
    projectId?: string | number
    exclusiveParam?: string,
}
export interface sellOrder {
    collectionId?: string | number, //藏品ID
    orderType?: string | number,    //1：auction竞拍; 2: 一口价竞拍;
    exchangeType?: string | number, //中心化（1）去中心化（2)
    price?: string | number,        //竞拍类型代表起拍价格
    priceToken?: string | number,   //token名称
    startTime?: string | number,    //开始时间
    endTime?: string | number,      //结束时间
    reservePrice?: string | number  //保底价（竞拍的时候用）
    signature?: string,              //如果是去中心化必填
    signAddress?: string,             //如果是去中心化的必填
    signatureStr: string               //如果是去中心化的必填
    nftType: string | number           //nft类型:1:721,2:1155
    quantity: string | number           //数量
    // projectId?: string | number,
    // recordId?: string | number,
}
export interface clearVerify { //音乐验证
    requestId: string,
    signature: string,
    address: string,
}
export interface cancelParams { //取消挂单
    orderId?: string | number,
    txHash?: string | number,
    signAddress?: string
}
export interface queryListing {
    collectionId: string | number,
    fromId?: string | number,
    limit?: string | number
}
export interface queryOffers {
    collectionId?: string | number,
    projectId?: string | number,
    fromId?: string | number,
    limit?: string | number,
    status?: string | number,
    type?: string | number
}
export interface makeAnOffer {
    orderId?: string | number,
    sellOrderId?: string | number,
    price: string | number,
    priceToken: string,
    startTime: string | number,
    endTime: string | number,
    signature?: string | number,
    signAddress?: string,
    signatureStr?: string,
    txHash?: string
    nftType: string | number           //nft类型:1:721,2:1155
    quantity: string | number           //数量
}
export interface offerSign {
    offerOrderId: string,
    signature: string,
    signAddress: string,
    txHash: string
}
export interface auctionLiveInfo {
    sellOrderId?: string,
    collectionId?: string,
    recordId?: string,
    projectId?: string
}
export interface cancelOffer {
    orderId?: string,
    txHash?: string
}
export interface takeOffer {
    offerOrderId?: string,
    sellOrderId?: string,
    txHash?: string
}

export interface takeAlist {
    collectionId?: string,
    sellOrderId?: string,
    walletAddress?: string,
    txHash?: string,
    orderId?: string
    signature?: string
    signAddress?: string
    signatureStr?: string
}

export interface createNft {
    worksId?: string,
    chainId?: number | string,
    nftType?: number | string,
    title?: string,
    description?: string,
    creatorRoyalty?: number | string,
    creatorAddress?: string | number,
    saleType?: number | string,
    startPrice?: string | number,
    priceToken?: string | number,
    startTime?: number | string,
    endTime?: number | string,
    urls?: string | number,
    quantity?: string | number
}
export interface moments {
    saleType?: string | number,
    sortBy?: string | number,
    mintStatus?: string | number,
    fromId?: string | number,
    limit?: string | number
}
export interface userSetting {
    publishMyNft?: boolean,
    publishMyLikes?: boolean,
    publishMyCollection?: boolean,
    publishMySold?: boolean,
}
export interface noticeSetting {
    businessType?: string,
    isEnable?: string | number,
    email?: string,
    verifyOrderId?: string | number,
    verifyCode?: string | number,
}
export interface applyNFTWhiteType {
    name: string
    conact: string
    socialMedia: string
    introduction: string
}
export interface notCreatedWorksType {
    cursor: number
    maxCount: number
}
export interface createdWorksType {
    fromId: number
    limit: number
}
export interface applyCreateProjectType {
    worksId: string
    projectName: string
    projectSymbol: string
    chainId: number
    nftType: string // 1代表721,2代表1155
    coverUrl: string
    avatarUrl: string
    bannerUrl: string
    projectDescription: string
    category: string
    creatorRoyalty: number
    creatorAddress: string
}
export interface applyDetailsType {
    recordId: string
    projectId: string
}
export interface applyDropsType {
    freeClaim: string | number // 0-否，1-是
    needWhiteList: string | number// 0-否，1-是
    projectId: string
    saleType: string //2代表一口价,3代表盲盒
    nftType: string // 1代表721,2代表1155
    price: string
    issuesQty: string
    priceToken: string
    contact: string
    endTime: string
    startTime: string
    urls: string
}
export interface projectDetailsType {
    projectId: string
}
export interface modifyProjectInformationType {
    projectId: string
    projectName: string
    projectSymbol: string
    coverUrl: string
    avatarUrl: string
    bannerUrl: string
    projectDescription: string
    category: string
}
export interface getProjectEquityType {
    projectId: string
}
export interface modifyProjectEquityType {
    collectionId?: string
    albumIdStr?: string
    oldAlbumIdStr?: string
    newAlbumParams?: string
}
export interface getSignType {
    walletAddress: string
}
export interface verifyReadNFTType {
    chainId: number
    walletAddress: string
    contractAddress: string
    signature: string
    nonce: string
}
export interface addCollaboratorType {
    recordId: string
    collaborator: string
    projectId: string
}
export interface deleteCollaboratorType {
    recordId: string
    collaborator: string
    projectId: string
}
export interface applyImportProjectType {
    worksId: string
    contractId: string
    coverUrl: string
    avatarUrl: string
    bannerUrl: string
    projectDescription: string
    category: string
    creatorRoyalty: string
    creatorAddress: string
    collaborator: string
}
// export interface

export interface projectPerks {
    type?: string | number,
    sortBy?: string | number,
    fromId?: string | number,
    limit?: string | number
}
export interface associatedNft {
    albumId: string | number
}

export interface addAlbum {
    albumName: string,
    albumDesc: string,
    coverUrl: string,
    albumAuthor?: string | number,
    issueDate?: string | number
}
export interface editAlbum {
    albumId: string,
    albumName: string,
    albumDesc: string,
    coverUrl: string,
    mediaParam: string
}
export interface nftExclusive {
    collectionId?: string,
    albumIdStr?: string,
    oldAlbumIdStr?: string,
    newAlbumParams?: string
}
export interface getMyperk {
    creatorUserId?: string
}
export interface deleteAlbum {
    albumId?: string,
    reason?: string
}

export interface playUrl {
    contentId?: string
}

export interface checkPrivilege {
    recordId?: string | number
    type?: string | number
}

export interface freeClaimOrder {
    recordId?: string | number
    quantity?: string | number
    captchaId: string
    captchaResponse: string
    challenge: string
}