import type { VNode } from 'vue'
import { defineComponent, onBeforeMount } from 'vue'
import { addRedText } from '~/utils/helper'

import styles from './default.module.css'
import { NuxtLink } from '#components'

export default defineComponent({
	name: 'LayoutsDefault',
	setup() {
		onBeforeMount(() => {
			window.onerror = (message, source, lineno, colno, error): void => {
				addRedText(`layouts/default/ error,
					${message}: ${source} ${lineno} ${colno} \n${JSON.stringify(error)}`)
			}

			window.addEventListener('unhandledrejection', function (event) {
				addRedText(`layouts/default/ promise ${event.reason}`)
			})
		})
	},

	render(): VNode {
		return (
			<div class={styles.page}>
                <div class={styles.nav}>
                    <div>Menu:</div>

                    <NuxtLink to='/'>Main Page</NuxtLink>
                    <NuxtLink to='/about'>About Page</NuxtLink>
                </div>

                <div class={styles.content}>
                    {this.$slots.default?.()}
                </div>
            </div>
		)
	},
})
