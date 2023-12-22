import React from 'react';
import { Button, Col, Container, Form, Row, Stack, Table } from 'react-bootstrap';
import './ProductWrite.scss';

function ProductWrite(props) {
    return (
        <Container className='product_write_container'>
            <Stack className="my-2 py-4 px-1" gap={3}>
                <Table bordered>
                    <tbody>
                        <tr>
                            <th className="dot">상품명</th>
                            <td>
                                <Form.Control type="text" size='sm' />
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">상품 이미지</th>
                            <td>
                                <Form.Group controlId='Product.ImgFileInput'>
                                    <Form.Control type="file" placeholder="name@example.com" size='sm' />
                                    <Form.Label className='discription'>*권장 파일 사이즈 : 300 X 300px</Form.Label>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">브랜드</th>
                            <td>
                                <Form.Control type="text" size='sm' />
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">구매링크</th>
                            <td>
                                <Form.Control type="url" size='sm' />
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">가격</th>
                            <td>
                                <Form.Control type="text" id="cost_input" size='sm' />
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">분류</th>
                            <td>
                                <Row>
                                    <Col>
                                        <Form.Group controlId='Product.Category_01'>
                                            <Form.Label>1차 분류</Form.Label>
                                            <Form.Select size="sm" aria-label="Product_Category_01" required>
                                                <option value="" disabled selected>선택하세요.</option>
                                                <option value="1">홍차</option>
                                                <option value="2">녹차</option>
                                                <option value="3">우롱차</option>
                                                <option value="4">보이차</option>
                                                <option value="5">백차</option>
                                                <option value="6">블렌딩</option>
                                                <option value="7">콤부차</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId='Product.Category_02'>
                                            <Form.Label>2차 분류</Form.Label>
                                            <Form.Select size="sm" aria-label="Product_Category_01" required>
                                                <option value="" disabled selected>선택하세요.</option>
                                                <option value="1">티백</option>
                                                <option value="2">잎차</option>
                                                <option value="3">액상차</option>
                                                <option value="4">RTD</option>
                                                <option value="5">파우더</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <th className="dot" rowSpan={3}>재료</th>
                            <td className='Product_Tag'>
                                <h6>베이스 차</h6>
                                <input type="checkbox" className="btn-check" id="tag-ingredient-tea-01" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-tea-01">홍차</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-ingredient-tea-02" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-tea-02">우롱</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-ingredient-tea-03" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-tea-03">후발효차</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-ingredient-tea-04" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-tea-04">녹차</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-ingredient-tea-05" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-tea-05">백차</label>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td className='Product_Tag'>
                                <h6>블렌딩 과일</h6>
                                <input type="checkbox" className="btn-check" id="tag-ingredient-fruit-01" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-fruit-01">베르가못</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-ingredient-fruit-02" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-fruit-02">배</label>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td className='Product_Tag'>
                                <h6>블렌딩 허브 / 꽃</h6>
                                <input type="checkbox" className="btn-check" id="tag-ingredient-herb-01" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-herb-01">라벤더</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-ingredient-herb-02" autocomplete="off" />
                                <label className="btn btn-outline-info" for="tag-ingredient-herb-02">페퍼민트</label>{' '}
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">맛 / 향</th>
                            <td className='Product_Tag'>
                                <input type="checkbox" className="btn-check" id="tag-taste-01" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-01">풀</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-02" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-02">자스민</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-03" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-03">국화</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-04" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-04">사과</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-05" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-05">복숭아</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-06" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-06">배</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-07" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-07">포도</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-08" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-08">오렌지</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-09" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-09">베르가못</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-10" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-10">레몬</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-11" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-11">파인애플</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-12" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-12">소나무</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-13" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-13">버섯</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-14" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-14">이끼</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-15" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-15">흙</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-16" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-16">훈제</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-17" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-17">견과류</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-18" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-18">담배</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-19" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-19">초콜릿</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-20" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-20">꿀</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-21" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-21">카라멜</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-22" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-22">커스터드</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-23" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-23">생강</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-24" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-24">시나몬</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-25" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-25">우유</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-26" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-26">버터</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-27" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-27">크림</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-28" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-28">해조류</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-29" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-29">민트</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-taste-30" autocomplete="off" />
                                <label className="btn btn-color-01" for="tag-taste-30">샐러리</label>
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">효능</th>
                            <td className='Product_Tag'>
                                <input type="checkbox" className="btn-check" id="tag-efficacy-01" autocomplete="off" />
                                <label className="btn btn-color-02" for="tag-efficacy-01">감기 예방</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-efficacy-02" autocomplete="off" />
                                <label className="btn btn-color-02" for="tag-efficacy-02">근육피로</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-efficacy-03" autocomplete="off" />
                                <label className="btn btn-color-02" for="tag-efficacy-03">숙취해소</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-efficacy-04" autocomplete="off" />
                                <label className="btn btn-color-02" for="tag-efficacy-04">수면</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-efficacy-05" autocomplete="off" />
                                <label className="btn btn-color-02" for="tag-efficacy-05">피부미용</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-efficacy-06" autocomplete="off" />
                                <label className="btn btn-color-02" for="tag-efficacy-06">집중력</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-efficacy-07" autocomplete="off" />
                                <label className="btn btn-color-02" for="tag-efficacy-07">위장건강</label>
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">테마(상황별)</th>
                            <td className='Product_Tag'>
                                <input type="checkbox" className="btn-check" id="tag-theme-situation-01" autocomplete="off" />
                                <label className="btn btn-color-03" for="tag-theme-situation-01">연휴 선물 추천</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-theme-situation-02" autocomplete="off"/>
                                <label className="btn btn-color-03" for="tag-theme-situation-02">특별한 날에</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-theme-situation-03" autocomplete="off"/>
                                <label className="btn btn-color-03" for="tag-theme-situation-03">휴식이 필요할 때</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-theme-situation-04" autocomplete="off" />
                                <label className="btn btn-color-03" for="tag-theme-situation-04">기분전환</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-theme-situation-05" autocomplete="off" />
                                <label className="btn btn-color-03" for="tag-theme-situation-05">파티할 때</label>
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">테마(시즌별)</th>
                            <td className='Product_Tag'>
                                <input type="checkbox" className="btn-check" id="tag-theme-season-01" autocomplete="off" />
                                <label className="btn btn-color-04" for="tag-theme-season-01">벚꽃놀이</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-theme-season-02" autocomplete="off" />
                                <label className="btn btn-color-04" for="tag-theme-season-02">여름 무더위에</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-theme-season-03" autocomplete="off" />
                                <label className="btn btn-color-04" for="tag-theme-season-03">가을 바람 불 때</label>{' '}
                                <input type="checkbox" className="btn-check" id="tag-theme-season-04" autocomplete="off" />
                                <label className="btn btn-color-04" for="tag-theme-season-04">크리스마스</label>
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">금지사항</th>
                            <td className='Product_Tag'>
                                <input type="checkbox" className="btn-check" id="btn-check-01" autocomplete="off" />
                                <label className="btn btn-outline-danger" for="btn-check-01">임산부 주의</label>{' '}
                                <input type="checkbox" className="btn-check" id="btn-check-02" autocomplete="off" />
                                <label className="btn btn-outline-danger" for="btn-check-02">고혈압 환자 주의</label>{' '}
                                <input type="checkbox" className="btn-check" id="btn-check-03" autocomplete="off" />
                                <label className="btn btn-outline-danger" for="btn-check-03">알러지 주의</label>
                            </td>
                        </tr>
                        <tr>
                            <th className="dot">상품 상세 설명</th>
                            <td>
                                <Form.Control as="textarea" rows={1} placeholder="Editor API를 추가하여 상세페이지 입력이 가능하게끔 작업 예정." />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="primary">등록</Button>
            </Stack>
        </Container>
    );
}

export default ProductWrite;