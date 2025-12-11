import React from "react";
import SeasonCard from "./SeasonCard";

export default class SeasonsGrid extends React.Component {
  render() {
    const { seasons = [] } = this.props;
    return (
      <section className="seasons-grid">
        {seasons.map((season, idx) => (
          <SeasonCard key={idx} season={season} />
        ))}
      </section>
    );
  }
}