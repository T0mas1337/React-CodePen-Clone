import React from 'react';
import { useState } from 'react';

import CATEGORIES from '../../config/categories';
import Category from '../test/Category';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionBox from '../test/QuestionBox';
import questionsArt from '../../config/art.json';
import questionsEntertainment from '../../config/enertainment.json';
import questionsHistory from '../../config/history.json';
import './Quiz.css';

function Quiz() {
    const [category, setCategory] = useState(null);
    const [questions, setQuestions] = useState([]);

    const setCurrentCategory = category => {
        setCategory(category);

        switch (category.name) {
            case CATEGORIES.art.name:
                setQuestions(questionsArt);
                break;
            case CATEGORIES.entertainment.name:
                setQuestions(questionsEntertainment);
                break;
            case CATEGORIES.history.name:
                setQuestions(questionsHistory);
                break;
        }
    };

    return (
        <Container  style={{marginRight: 75, marginLeft: 75, marginTop: 50}}>
            {category? (
                    <Row className="my-5">
                        <Col className="text-center">

                            <h1 style={{textAlign: "center", marginBottom: 10}}  onClick={() => setCategory(null)}>Вернуться назад</h1>
                        </Col>

                    </Row>
                ) :
                <Row className="my-5">
                    <Col className="text-center">
                        <h1 style={{textAlign:"center"}}>Список тестов</h1>
                    </Col>
                </Row> }
            {category ? (
                <>

                    <Row className="d-flex justify-content-center mb-4">
                        <Col md={4} className="text-center">
                            <Category category={category} size="sm" onSelect={setCurrentCategory} />
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center">
                        <Col md={4} className="text-center" style={{textAlign:'center', marginTop: 15}}>
                            <QuestionBox questions={questions} />
                        </Col>
                    </Row>

                </>

            ) : (
                <>
                    {Object.values(CATEGORIES).map((c, i) => (
                        <Row key={i} className="d-flex justify-content-center mb-5" style={{marginTop: 10}}>
                            <Col md={4}>
                                <Category category={c} onSelect={setCurrentCategory} />

                            </Col>
                        </Row>
                    ))}
                </>
            )}
        </Container>
    );
}

export default Quiz;