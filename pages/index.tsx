import type { VNode } from 'vue'
import { defineComponent } from 'vue'

import styles from './index.module.css'

export default defineComponent({
	name: 'MainPage',

	render(): VNode {
		return (
			<div class={styles.page}>
                Main Page
            </div>
		)
	},
})
