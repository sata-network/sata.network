const applepay = require("@static/img/payTypes/applepay@2x.png");
const Bancnet = require("@static/img/payTypes/Bancnet@2x.png");
const DANA = require("@static/img/payTypes/DANA@2x.png");
const googlepay = require("@static/img/payTypes/googlepay@2x.png");
const kakaopay = require("@static/img/payTypes/kakaopay@2x.png");
const KHIPUPAY = require("@static/img/payTypes/KHIPUPAY@2x.png");
const LINEPay = require("@static/img/payTypes/LINEPay@2x.png");
const Mastercard = require("@static/img/payTypes/Mastercard@2x.png");
const MoMo = require("@static/img/payTypes/MoMo@2x.png");
const OVO = require("@static/img/payTypes/OVO@2x.png");
const PAYNOW = require("@static/img/payTypes/PAYNOW@2x.png");
const PixPay = require("@static/img/payTypes/PixPay@2x.png");
const QRIS = require("@static/img/payTypes/QRIS@2x.png");
const THAI_QR = require("@static/img/payTypes/THAI_QR@2x.png");
const TouchnGo = require("@static/img/payTypes/TouchnGo@2x.png");
const ViettelPay = require("@static/img/payTypes/ViettelPay@2x.png");
const VirtualAccount = require("@static/img/payTypes/VirtualAccount@2x.png");
const ZaloPay = require("@static/img/payTypes/ZaloPay@2x.png");

export const selectPayLogo = (name?: string) => {
    let str = name?.toLocaleLowerCase();
    if (str?.includes('visa/mastercard')) {
        return Mastercard;
    }
    if (str?.includes('apple pay')) {
        return applepay;
    }
    if (str?.includes('googlepay')) {
        return googlepay;
    }
    if (str?.includes('kakao pay')) {
        return kakaopay;
    }
    if (str?.includes(`touch 'n go`)) {
        return TouchnGo;
    }
    if (str?.includes(`thai_qr`)) {
        return THAI_QR;
    }
    if (str?.includes(`pix pay`)) {
        return PixPay;
    }
    if (str?.includes(`pay now`)) {
        return PAYNOW;
    }
    if (str?.includes(`momo`)) {
        return MoMo;
    }
    if (str?.includes(`zalopay`)) {
        return ZaloPay;
    }
    if (str?.includes(`viettelpay`)) {
        return ViettelPay;
    }
    if (str?.includes(`khipu pay`)) {
        return KHIPUPAY;
    }
    if (str?.includes(`virtual account`)) {
        return VirtualAccount;
    }
    if (str?.includes(`qris`)) {
        return QRIS;
    }
    if (str?.includes(`dana`)) {
        return DANA;
    }
    if (str?.includes(`ovo`)) {
        return OVO;
    }
    if (str?.includes(`line pay`)) {
        return LINEPay;
    }
    if (str?.includes(`bancnet`)) {
        return Bancnet;
    }
    return null;
}