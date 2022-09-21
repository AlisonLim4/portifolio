import React from 'react';
import styles from './Snippets.module.css';
const Snippets = ({ name, email, mensagem, date }) => {
  return (
    <div className={styles.snippets}>
      <div className={styles.teste}>
        <div className={styles.lines}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
        </div>
        <div className={styles.code}>
          <p>
            <span className={styles.pink}>
              const <span className={styles.blue}>button</span>
            </span>{' '}
            = document.querySelector('
            <span className={styles.orange}>#sendBtn</span>');
          </p>
          <br />
          <p className={styles.pink}>
            const
            <span className={styles.blue}> message </span>={' '}
            <span style={{ color: 'var(--primary)' }}>{'{'}</span>
          </p>
          <p style={{ color: 'var(--blue)' }}>
            &nbsp;name: <span style={{ color: 'var(--orange)' }}>"{name}"</span>
            <span style={{ color: 'var(--primary)' }}>,</span>
          </p>
          <p style={{ color: 'var(--blue)' }}>
            &nbsp;email:{' '}
            <span style={{ color: 'var(--orange)' }}>"{email}"</span>
            <span style={{ color: 'var(--primary)' }}>,</span>
          </p>
          <p style={{ color: 'var(--blue)' }}>
            &nbsp;message:{' '}
            <span style={{ color: 'var(--orange)' }}>"{mensagem}"</span>
            <span style={{ color: 'var(--primary)' }}>,</span>
          </p>
          <p>
            &nbsp;date: <span style={{ color: 'var(--orange)' }}>"{date}"</span>
          </p>
          <p>{'}'}</p>
          <br /> {'  '}
          <p style={{ color: 'var(--blue)' }}>
            button.addEventListener{'('}
            <span style={{ color: 'var(--orange)' }}>'click'</span>
            <span style={{ color: 'var(--primary)' }}>, {'()'}</span>{' '}
            <span style={{ color: 'var(--pink)' }}>{'=>'}</span>{' '}
            <span style={{ color: 'var(--primary)' }}>{'{'}</span>
          </p>
          <p>
            <span style={{ color: 'var(--blue)' }}>&nbsp;form</span>.
            <span style={{ color: 'var(--blue)' }}>send</span>
            {'('}
            <span style={{ color: 'var(--blue)' }}>message</span>
            {')'};
          </p>
          <p>{'})'}</p>
        </div>
      </div>
    </div>
  );
};

export default Snippets;
