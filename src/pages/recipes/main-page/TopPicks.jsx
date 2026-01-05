import React from "react";
import './styles/TopPickCarousel.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * TopPicks component displays a simple autoplaying carousel of featured picks.
 *
 * Props:
 * - topPicks: Array<{img: string, title: string}>
 * - title: string - heading used in thumbnail area
 *
 * State:
 * - currentIndex: number - current active slide
 *
 * @extends React.Component
 */
export default class TopPicks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };

        this.autoPlayInterval = null;
    }

    /**
     * Start autoplay when component mounts.
     * @returns {void}
     */
    componentDidMount() {
        this.startAutoPlay();
    }
    
    /**
     * Stop autoplay on unmount.
     * @returns {void}
     */
    componentWillUnmount() {
        this.stopAutoPlay();
    }

    /**
     * Start the autoplay interval advancing slides.
     * @returns {void}
     */
    startAutoPlay = () => {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 3000);
    }

    /**
     * Stop the autoplay interval if running.
     * @returns {void}
     */
    stopAutoPlay = () => {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    /**
     * Restart autoplay by stopping then starting.
     * @returns {void}
     */
    resetAutoPlay = () => {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    /**
     * Advance to the next slide.
     * @returns {void}
     */
    nextSlide = () => {
        const { topPicks } = this.props;
        this.setState({
            currentIndex: (this.state.currentIndex + 1) % topPicks.length
        })
    }

    /**
     * Move to the previous slide.
     * @returns {void}
     */
    prevSlide = () => {
        const { topPicks } = this.props;
        this.setState({
            currentIndex: this.state.currentIndex === 0 ? topPicks.length - 1 : this.state.currentIndex - 1
        })
    }

    /**
     * Jump to a specific slide index.
     * @param {number} index - Slide index to display.
     * @returns {void}
     */
    goToSlide = (index) => {
        this.setState({ 
            currentIndex: index
        })
    }

    /**
     * Pause autoplay on mouse enter.
     * @returns {void}
     */
    handleMouseEnter = () => {
        this.stopAutoPlay();
    }

    /**
     * Resume autoplay on mouse leave.
     * @returns {void}
     */
    handleMouseLeave = () => {
        this.startAutoPlay();
    }

    /**
     * Render the TopPicks carousel UI.
     * @returns {JSX.Element} Carousel markup.
     */
    render() {
        const { currentIndex } = this.state;
        const topPicks = this.props.topPicks;
        return (
            <section className="top-picks-section">
                <div className="heading-container">
                    <h3 className="top-pick-heading">
                        <span className="top-line">Top Picks</span>
                        <span className="bottom-line">{this.props.title}</span>
                    </h3>
                </div>
                <div className="alice-carousel-wrapper" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <button className="alice-nav-btn alice-nav-prev" onClick={this.prevSlide}>
                        <FaChevronLeft />
                    </button>
                    <div className="alice-main-display">
                        <div className="alice-main-card">
                            <img src={topPicks[currentIndex].img} alt={topPicks[currentIndex].title} />
                            <div className="alice-main-overlay">
                                <h3>{topPicks[currentIndex].title}</h3>
                            </div>
                        </div>
                        <div className="alice-thumbnails">
                            {topPicks.map((item, index) => (
                                <div key={index} className={`alice-thumbnail ${currentIndex === index ? 'active': ''}`} onClick={() => this.goToSlide(index)}>
                                    <img src={item.img} alt={item.title} />
                                    <div className="thumbnail-number">{index + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="alice-nav-btn alice-nav-next" onClick={this.nextSlide}>
                        <FaChevronRight />
                    </button>
                </div>
            </section>
        );
    }

}