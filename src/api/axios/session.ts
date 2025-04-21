import axios from "axios";
import { BASE_URL } from "./base";

const sessionApi = axios.create({
  baseURL: `${BASE_URL}/session`,
  withCredentials: true, // 세션 쿠키 필요
});

export default sessionApi;

// POST    /session/login            로그인 및 세션 생성
// POST    /session/signup           회원가입 처리
// POST    /session/reset-password   비밀번호 재설정 이메일 발송 등
// GET     /session/me               현재 로그인 사용자 정보 반환
// POST    /session/logout           세션 무효화
