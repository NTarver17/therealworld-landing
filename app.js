/**
 * THE REAL WORLD 2.0 - HIGH CONVERSION ENGINE & INTERACTIVE SCRIPTS
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. AFFILIATE TARGET CONFIGURATION
    const AFFILIATE_CHECKOUT_URL = 'https://jointherealworld.com/a/qmHjdpp6';

    function setupAffiliateLinks() {
        const urlParams = new URLSearchParams(window.location.search);
        let finalUrl = AFFILIATE_CHECKOUT_URL;

        if (urlParams.toString()) {
            const separator = finalUrl.includes('?') ? '&' : '?';
            finalUrl = `${finalUrl}${separator}${urlParams.toString()}`;
        }

        const affiliateLinks = document.querySelectorAll('.cta-affiliate-link');
        affiliateLinks.forEach(link => {
            link.href = finalUrl;
        });
    }

    setupAffiliateLinks();

    // 2. SCROLL PROGRESS BAR
    const progressBar = document.getElementById('scrollProgressBar');
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });

    // 3. LIVE 24-HOUR COUNTDOWN TIMERS
    function startCountdown() {
        // 4 hours 18 mins 32 secs initial countdown
        let totalSeconds = (4 * 3600) + (18 * 60) + 32;

        const topTimer = document.getElementById('topCountdown');
        const cardTimer = document.getElementById('cardCountdown');

        setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
            } else {
                totalSeconds = 86400; // Reset
            }

            const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const secs = String(totalSeconds % 60).padStart(2, '0');
            const formatted = `${hrs}:${mins}:${secs}`;

            if (topTimer) topTimer.textContent = formatted;
            if (cardTimer) cardTimer.textContent = formatted;
        }, 1000);
    }

    startCountdown();

    // 4. MOBILE MENU TOGGLE
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });

        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
            });
        });
    }

    // 5. CAMPUSES FILTER TABS
    const tabButtons = document.querySelectorAll('.tab-btn');
    const campusCards = document.querySelectorAll('.campus-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            campusCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 6. INTERACTIVE POTENTIAL INCOME & CAMPUS CALCULATOR
    let selectedTime = '30m';
    let selectedBudget = '0';
    let selectedGoal = '1k';

    const timeOptions = document.querySelectorAll('#timeOptions .calc-option');
    const budgetOptions = document.querySelectorAll('#budgetOptions .calc-option');
    const goalOptions = document.querySelectorAll('#goalOptions .calc-option');

    const resCampus = document.getElementById('resCampus');
    const resTimeline = document.getElementById('resTimeline');
    const resProjected = document.getElementById('resProjected');
    const resSummary = document.getElementById('resSummary');

    function updateCalculator() {
        if (!resCampus) return;

        if (selectedBudget === '0') {
            if (selectedTime === '30m') {
                resCampus.textContent = 'Strategic Copywriting & Marketing';
                resTimeline.textContent = '10 - 18 Days';
                resProjected.textContent = '$1,500 - $3,000/mo';
                resSummary.textContent = 'High-income sales writing and email marketing. Requires $0 in startup cost—write for creators and brands with pre-built templates.';
            } else {
                resCampus.textContent = 'AI Automation Agency';
                resTimeline.textContent = '14 - 21 Days';
                resProjected.textContent = selectedGoal === '10k' ? '$5,000 - $10,000+/mo' : '$2,500 - $5,000/mo';
                resSummary.textContent = 'Build and sell AI chatbots and lead automation to local businesses. Zero startup capital needed—scale with monthly retainers.';
            }
        } else if (selectedBudget === '100-500') {
            resCampus.textContent = 'E-Commerce & Dropshipping';
            resTimeline.textContent = '18 - 30 Days';
            resProjected.textContent = selectedGoal === '10k' ? '$6,000 - $12,000/mo' : '$3,000 - $5,000/mo';
            resSummary.textContent = 'Test and scale viral products using TikTok ads and direct supplier relationships. Learn product research software and store design.';
        } else {
            // $1000+
            if (selectedGoal === '10k') {
                resCampus.textContent = 'Crypto & Market Scalping';
                resTimeline.textContent = '21 - 45 Days';
                resProjected.textContent = '$8,000 - $15,000+/mo';
                resSummary.textContent = 'Leverage institutional crypto narratives and market signals from veteran traders. Master strict risk management frameworks.';
            } else {
                resCampus.textContent = 'Business Mastery & Agency Scaling';
                resTimeline.textContent = '14 - 28 Days';
                resProjected.textContent = '$4,000 - $8,000/mo';
                resSummary.textContent = 'Systemize your business with high-performing contractors, automated outreach funnels, and tax optimization structures.';
            }
        }
    }

    function setupOptionGroup(elements, callback) {
        elements.forEach(opt => {
            opt.addEventListener('click', () => {
                elements.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                callback(opt);
                updateCalculator();
            });
        });
    }

    setupOptionGroup(timeOptions, (opt) => selectedTime = opt.getAttribute('data-time'));
    setupOptionGroup(budgetOptions, (opt) => selectedBudget = opt.getAttribute('data-budget'));
    setupOptionGroup(goalOptions, (opt) => selectedGoal = opt.getAttribute('data-goal'));

    // 7. PORTAL SNEAK PEEK SIMULATOR TABS
    const simTabBtns = document.querySelectorAll('.sim-tab-btn');
    const simPanels = document.querySelectorAll('.sim-panel');

    simTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            simTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetId = `sim-${btn.getAttribute('data-sim')}`;
            simPanels.forEach(panel => {
                if (panel.id === targetId) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // 8. FAQ ACCORDION
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            accordionItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 9. EXIT-INTENT RECOVERY MODAL
    const exitModal = document.getElementById('exitModal');
    const exitModalClose = document.getElementById('exitModalClose');
    let modalShown = false;

    function showExitModal() {
        if (modalShown || sessionStorage.getItem('trw_modal_shown')) return;
        modalShown = true;
        sessionStorage.setItem('trw_modal_shown', 'true');

        if (exitModal) {
            exitModal.classList.add('active');
            startModalTimer();
        }
    }

    function startModalTimer() {
        let sec = 599; // 9:59
        const timerEl = document.getElementById('modalCountdown');
        setInterval(() => {
            if (sec > 0) sec--;
            const m = String(Math.floor(sec / 60)).padStart(2, '0');
            const s = String(sec % 60).padStart(2, '0');
            if (timerEl) timerEl.textContent = `${m}:${s}`;
        }, 1000);
    }

    // Trigger on mouse leave window toward browser tabs
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 20) {
            showExitModal();
        }
    });

    // Mobile fallback trigger after 45s of browsing
    setTimeout(() => {
        showExitModal();
    }, 45000);

    if (exitModalClose && exitModal) {
        exitModalClose.addEventListener('click', () => {
            exitModal.classList.remove('active');
        });

        exitModal.addEventListener('click', (e) => {
            if (e.target === exitModal) {
                exitModal.classList.remove('active');
            }
        });
    }

    // 10. RECENT ACTIVITY SIGNUP TOASTS
    const activities = [
        { name: "Lucas M. (21)", action: "earned $1,450", campus: "AI Automation", time: "3m ago", flag: "🇺🇸" },
        { name: "Damian K.", action: "joined The Real World", campus: "E-Commerce", time: "Just now", flag: "🇬🇧" },
        { name: "Mateo R. (19)", action: "closed a $3,200 client", campus: "Client Acquisition", time: "8m ago", flag: "🇪🇸" },
        { name: "Alex V.", action: "locked in Conquer Plan", campus: "Crypto Campus", time: "Just now", flag: "🇨🇦" },
        { name: "Stefan N. (24)", action: "hit $8,900 monthly revenue", campus: "Marketing & Copy", time: "14m ago", flag: "🇩🇪" }
    ];

    let toastIndex = 0;

    function showProofToast() {
        const item = activities[toastIndex % activities.length];
        toastIndex++;

        const existingToast = document.querySelector('.social-proof-toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'social-proof-toast';
        toast.innerHTML = `
            <div class="toast-avatar">${item.flag}</div>
            <div class="toast-content">
                <p><strong>${item.name}</strong> ${item.action}</p>
                <span class="toast-meta">${item.campus} • ${item.time}</span>
            </div>
            <button class="toast-close" aria-label="Close">&times;</button>
        `;

        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('visible'), 100);

        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 300);
        });

        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.remove('visible');
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);
    }

    // Inject Toast CSS
    const toastStyle = document.createElement('style');
    toastStyle.textContent = `
        .social-proof-toast {
            position: fixed;
            bottom: 80px;
            left: 20px;
            background: rgba(18, 21, 32, 0.95);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(245, 158, 11, 0.3);
            border-radius: 12px;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
            z-index: 90;
            transform: translateY(100px);
            opacity: 0;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
            max-width: 340px;
        }
        .social-proof-toast.visible {
            transform: translateY(0);
            opacity: 1;
        }
        .toast-avatar {
            font-size: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            padding: 6px;
            border-radius: 8px;
        }
        .toast-content p {
            font-size: 0.84rem;
            color: #ffffff;
            line-height: 1.3;
        }
        .toast-content p strong {
            color: #f59e0b;
        }
        .toast-meta {
            font-size: 0.72rem;
            color: #94a3b8;
        }
        .toast-close {
            color: #64748b;
            font-size: 1.2rem;
            padding: 0 4px;
            align-self: flex-start;
        }
        .toast-close:hover {
            color: #ffffff;
        }
        @media (max-width: 768px) {
            .social-proof-toast {
                bottom: 85px;
                left: 14px;
                right: 14px;
                max-width: calc(100% - 28px);
            }
        }
    `;
    document.head.appendChild(toastStyle);

    setTimeout(() => {
        showProofToast();
        setInterval(showProofToast, 12000);
    }, 4000);
});
