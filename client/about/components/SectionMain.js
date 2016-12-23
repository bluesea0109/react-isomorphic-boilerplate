import React, { Component } from 'react'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={styles.sectionMain}>
                About
            </section>
        )
    }
}

export default SectionMain
