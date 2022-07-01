import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documenting Your Work',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        Learnt about the importance of documenting your learnings, and
        also learnt about tools, softwares that help us doing the same in most
        efficient manner, ref.- markdown,github,gitlab
      </>
    ),
  },
  {
    title: 'Web Development',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learnt about the most popular JAMstack, static sites, SSGs
        node package manager, 11ty, Docusaurus, Hugo
      </>
    ),
  },
  {
    title: 'Development Setup',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learnt about how to install OS( particularly Linux- Ubuntu),
        setting up Development Environment for working with several 
        technologies, Important Tools and configuring some useful
        IDEs including Sublime, Vim, VSCode.
        Also learnt about connnecting various systems through protocols
        like SFTP, LDAP etc.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--15')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
