import React from "react";

export default class InstagramActivity extends React.Component {

  render() {
    const { text, link, imageUrl, date, inverted } = this.props;

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    return (
      <li class={inverted ? "activity-inverted" : ""}>
        <div class="activity-badge instagram">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
        <a target="_blank" href={link}>
          <div class="activity-panel">
            <div>
              <p class="activity-title">{text}</p>
              <p><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> {dateStr} via Instagram</small></p>
            </div>
            <div>
              <img class="activity-image" src={imageUrl}/>
            </div>
          </div>
        </a>
      </li>
    );
  }
}
