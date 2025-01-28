import type { VNode } from 'vue'
import { defineComponent } from 'vue'

import styles from './about.module.css'

export default defineComponent({
	name: 'AboutPage',

	render(): VNode {
		return (
			<div class={styles.page}>
                About Page
            </div>
		)
	},
})