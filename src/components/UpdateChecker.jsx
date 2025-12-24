/*
 * @Author: Rowe inetech@zohomail.com
 * @Date: 2025-12-25 00:56:53
 * @LastEditors: Rowe inetech@zohomail.com
 * @LastEditTime: 2025-12-25 01:00:57
 * @FilePath: \sublink-worker\src\components\UpdateChecker.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { APP_VERSION, GITHUB_REPO, GITHUB_API_RELEASES, DOCS_URL } from '../constants.js';

// UpdateChecker Component - Renders a toast notification when a new version is available
export const UpdateChecker = () => {
    const xData = `updateChecker('${APP_VERSION}', '${GITHUB_API_RELEASES}')`;
    const releaseUrl = `${GITHUB_REPO}/releases/latest`;
    const updateGuideUrl = `${DOCS_URL}/guide/faq#使用-vercel-cloudflare-快速部署按钮后-如何同步上游更新`;
    
    return (
        <div
            x-data={xData}
            x-show="showUpdateToast"
            x-cloak
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 translate-y-2"
            x-transition:enter-end="opacity-100 translate-y-0"
            x-transition:leave="transition ease-in duration-200"
            x-transition:leave-start="opacity-100 translate-y-0"
            x-transition:leave-end="opacity-0 translate-y-2"
            class="fixed bottom-6 right-6 z-50 max-w-sm"
        >
            <div class="bg-white dark:bg-gray-800/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4 ring-1 ring-black/5">
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 pt-0.5">
                        <i class="fas fa-arrow-up text-primary-500"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <span x-text="i18n.newVersionAvailable || 'New Version Available'"></span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800" x-text="'v' + latestVersion"></span>
                        </h4>
                        <div class="mt-3 flex items-center gap-3 flex-wrap">

                        </div>
                    </div>
                    <button
                        x-on:click="dismissUpdate()"
                        class="flex-shrink-0 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                        aria-label="Close"
                    >
                        <i class="fas fa-times text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

