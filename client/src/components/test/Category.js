import React from 'react';

import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import '../Quiz/Quiz.css';

export default function Category({ category, size, onSelect }) {


    return (
        <div>
            <Card className={`card--bg-${category.color}`} onClick={() => onSelect(category)}>
                <div style={{display: 'flex', justifyContent: 'center', padding: 15, alignItems: "center"}}
                    className={classNames('text-center', {
                        'd-flex align-items-center justify-content-center p-2': size === 'sm',
                    })}
                >
                    <FontAwesomeIcon icon={category.icon} size="3x" />
                    <div style={{display: "flex", flexDirection: 'column', paddingLeft: 15}}>
                    <h3 className={classNames('mt-2 mb-0', { 'ms-3': size === 'sm' })} style={{marginBottom: 8}}>
                        {category.name}
                    </h3>
                    <p>{category.desc}</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}