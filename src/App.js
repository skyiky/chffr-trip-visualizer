import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MapContainer from './MapContainer';
import SidebarContainer from './SidebarContainer';
import 'typeface-roboto';
import './App.css';

//const trips1 = ["2016-07-02--11-56-24.json","2017-03-09--09-21-57.json","2017-06-23--23-11-39.json","2017-08-30--22-39-11.json","2016-07-02--13-09-31.json","2017-03-09--19-09-51.json","2017-06-24--15-45-44.json","2017-08-31--09-53-12.json","2016-07-02--16-01-50.json","2017-03-09--19-19-50.json","2017-06-24--22-02-51.json","2017-08-31--10-00-24.json","2016-07-03--11-48-40.json","2017-03-10--11-34-09.json","2017-06-25--11-57-25.json","2017-08-31--10-35-00.json","2016-07-03--12-37-25.json","2017-03-10--20-20-36.json","2017-06-25--21-59-13.json","2017-08-31--20-50-14.json","2016-07-03--14-01-28.json","2017-03-10--20-30-11.json","2017-06-26--10-28-21.json","2017-08-31--21-11-26.json","2016-07-03--16-11-56.json","2017-03-10--20-41-18.json","2017-06-26--21-52-09.json","2017-08-31--22-06-31.json","2016-07-03--17-09-09.json","2017-03-11--12-59-56.json","2017-06-27--11-06-22.json","2017-09-01--00-24-53.json","2016-07-03--17-33-23.json","2017-03-11--14-53-17.json","2017-06-27--11-26-40.json","2017-09-01--09-04-15.json","2016-07-03--18-29-56.json","2017-03-11--17-17-04.json","2017-06-27--20-26-41.json","2017-09-01--09-41-47.json","2016-07-03--19-04-11.json","2017-03-11--17-25-34.json","2017-06-29--11-56-43.json","2017-09-01--10-01-01.json","2016-07-04--21-47-21.json","2017-03-11--17-34-02.json","2017-06-29--12-17-57.json","2017-09-01--10-49-12.json","2016-07-04--21-58-54.json","2017-03-11--17-41-41.json","2017-06-29--21-47-25.json","2017-09-01--10-50-19.json","2016-07-05--12-19-21.json","2017-03-13--10-33-42.json","2017-06-30--12-47-36.json","2017-09-01--11-49-41.json","2016-07-05--12-54-21.json","2017-03-16--10-35-33.json","2017-06-30--22-33-54.json","2017-09-01--17-15-24.json","2016-07-05--14-27-35.json","2017-03-17--20-43-41.json","2017-06-30--23-02-01.json","2017-09-01--18-38-13.json","2016-07-05--14-46-45.json","2017-03-17--21-27-06.json","2017-07-01--08-45-14.json","2017-09-01--22-19-33.json","2017-01-28--11-39-41.json","2017-03-17--21-34-05.json","2017-07-01--10-30-39.json","2017-09-01--22-57-29.json","2017-01-29--18-41-56.json","2017-03-17--21-59-33.json","2017-07-01--12-44-29.json","2017-09-02--00-59-01.json","2017-01-29--19-38-59.json","2017-03-19--14-45-21.json","2017-07-01--12-53-16.json","2017-09-02--01-20-29.json","2017-01-29--20-29-43.json","2017-03-19--15-04-52.json","2017-07-02--10-05-19.json","2017-09-02--05-29-58.json","2017-01-30--08-34-50.json","2017-03-19--15-50-56.json","2017-07-02--21-55-13.json","2017-09-02--05-48-55.json","2017-01-30--10-35-32.json","2017-03-19--15-57-59.json","2017-07-02--22-46-36.json","2017-09-02--08-20-08.json","2017-01-30--20-51-49.json","2017-03-19--16-34-26.json","2017-07-03--00-38-36.json","2017-09-02--09-22-10.json","2017-01-31--09-52-11.json","2017-03-19--16-55-10.json","2017-07-03--00-57-15.json","2017-09-02--12-33-34.json","2017-01-31--11-14-04.json","2017-03-19--17-04-17.json","2017-07-03--10-18-01.json","2017-09-02--14-27-07.json","2017-01-31--21-43-18.json","2017-03-20--09-56-54.json","2017-07-03--18-16-22.json","2017-09-02--15-45-51.json","2017-01-31--22-02-28.json","2017-03-20--10-11-39.json","2017-07-06--20-44-43.json","2017-09-02--20-25-52.json","2017-02-01--10-56-53.json","2017-03-20--10-18-59.json","2017-07-06--21-06-27.json","2017-09-03--10-57-30.json","2017-02-01--12-10-44.json","2017-03-22--01-00-39.json","2017-07-07--07-40-25.json","2017-09-03--23-03-52.json","2017-02-01--21-34-47.json","2017-03-23--13-14-09.json","2017-07-13--21-27-45.json","2017-09-04--11-49-19.json","2017-02-02--11-43-00.json","2017-03-24--10-56-52.json","2017-07-13--21-33-57.json","2017-09-04--15-04-33.json","2017-02-03--11-03-41.json","2017-03-24--19-14-36.json","2017-07-14--10-45-40.json","2017-09-04--17-02-49.json","2017-02-03--11-33-43.json","2017-03-24--19-44-16.json","2017-07-14--11-10-07.json","2017-09-05--02-02-23.json","2017-02-03--20-00-50.json","2017-03-24--20-40-58.json","2017-07-14--11-29-49.json","2017-09-05--02-11-31.json","2017-02-03--21-52-50.json","2017-03-24--20-50-55.json","2017-07-15--09-19-56.json","2017-09-05--02-13-39.json","2017-02-03--23-00-05.json","2017-03-25--04-10-50.json","2017-07-15--09-29-34.json","2017-09-05--09-59-37.json","2017-02-03--23-12-40.json","2017-03-25--04-52-52.json","2017-07-15--09-35-35.json","2017-09-05--10-04-02.json","2017-02-05--12-04-10.json","2017-03-25--17-11-33.json","2017-07-15--10-13-40.json","2017-09-05--10-38-01.json","2017-02-05--17-06-08.json","2017-03-25--17-51-10.json","2017-07-30--15-02-13.json","2017-09-05--13-36-31.json","2017-02-05--17-11-25.json","2017-03-25--17-59-40.json","2017-07-31--07-14-19.json","2017-09-05--18-13-58.json","2017-02-06--10-27-25.json","2017-03-25--18-35-52.json","2017-08-08--02-47-54.json","2017-09-05--18-47-00.json","2017-02-06--20-25-00.json","2017-03-25--18-46-27.json","2017-08-08--11-26-00.json","2017-09-05--21-50-48.json","2017-02-06--20-53-45.json","2017-03-28--22-47-50.json","2017-08-08--14-44-51.json","2017-09-05--22-03-10.json","2017-02-07--12-03-19.json","2017-03-30--11-41-27.json","2017-08-10--17-46-50.json","2017-09-05--22-12-44.json","2017-02-07--12-12-06.json","2017-03-30--12-15-20.json","2017-08-10--18-16-41.json","2017-09-06--00-39-30.json","2017-02-07--22-42-52.json","2017-03-30--23-42-45.json","2017-08-13--10-10-32.json","2017-09-06--10-16-39.json","2017-02-08--13-24-40.json","2017-03-31--01-10-11.json","2017-08-13--11-28-46.json","2017-09-06--10-26-42.json","2017-02-08--21-29-42.json","2017-04-01--15-08-02.json","2017-08-13--12-38-18.json","2017-09-06--11-49-56.json","2017-02-09--12-35-43.json","2017-04-06--12-22-26.json","2017-08-13--13-25-03.json","2017-09-06--13-39-21.json","2017-02-09--22-20-07.json","2017-04-06--21-16-45.json","2017-08-15--00-38-14.json","2017-09-06--20-12-23.json","2017-02-10--12-18-06.json","2017-04-06--21-21-06.json","2017-08-15--11-45-29.json","2017-09-06--20-18-56.json","2017-02-10--19-36-11.json","2017-04-06--21-26-13.json","2017-08-15--21-15-00.json","2017-09-06--21-39-38.json","2017-02-10--21-43-44.json","2017-04-07--11-38-38.json","2017-08-16--10-11-24.json","2017-09-07--00-57-04.json","2017-02-11--12-15-57.json","2017-04-07--12-48-52.json","2017-08-18--22-04-35.json","2017-09-07--01-57-58.json","2017-02-11--15-53-04.json","2017-04-07--21-50-01.json","2017-08-19--12-21-07.json","2017-09-07--11-00-21.json","2017-02-12--17-46-36.json","2017-04-09--12-07-42.json","2017-08-19--22-10-10.json","2017-09-07--12-21-55.json","2017-02-12--18-53-27.json","2017-04-09--12-16-32.json","2017-08-20--12-49-41.json","2017-09-07--12-29-39.json","2017-02-13--10-45-26.json","2017-04-09--12-33-23.json","2017-08-20--13-08-09.json","2017-09-07--13-20-13.json","2017-02-13--21-43-31.json","2017-04-09--12-43-15.json","2017-08-20--14-39-31.json","2017-09-08--09-50-24.json","2017-02-14--12-02-31.json","2017-04-14--22-27-26.json","2017-08-20--16-06-01.json","2017-09-08--12-00-34.json","2017-02-14--12-17-25.json","2017-04-25--22-04-25.json","2017-08-20--19-43-45.json","2017-09-08--12-57-05.json","2017-02-14--16-59-25.json","2017-05-09--00-42-04.json","2017-08-20--20-20-17.json","2017-09-09--14-36-53.json","2017-02-14--18-09-32.json","2017-05-15--19-52-35.json","2017-08-20--22-35-11.json","2017-09-09--14-45-29.json","2017-02-14--18-24-14.json","2017-05-15--20-16-56.json","2017-08-21--09-57-47.json","2017-09-09--15-12-17.json","2017-02-14--19-27-11.json","2017-05-18--09-25-16.json","2017-08-21--23-56-06.json","2017-09-15--01-39-54.json","2017-02-14--20-08-30.json","2017-05-18--11-35-07.json","2017-08-22--11-12-20.json","2017-09-15--23-42-12.json","2017-02-15--10-51-03.json","2017-05-22--08-44-37.json","2017-08-22--23-46-07.json","2017-09-15--23-48-04.json","2017-02-15--11-32-01.json","2017-05-23--10-08-28.json","2017-08-23--10-13-08.json","2017-09-16--10-24-32.json","2017-02-15--12-43-45.json","2017-05-23--21-38-54.json","2017-08-23--10-24-25.json","2017-09-16--10-43-41.json","2017-02-16--00-11-22.json","2017-05-24--12-36-02.json","2017-08-23--11-24-49.json","2017-09-17--04-05-38.json","2017-02-16--12-15-26.json","2017-05-24--21-50-40.json","2017-08-23--11-36-14.json","2017-09-17--13-59-14.json","2017-02-16--12-27-34.json","2017-05-25--11-22-11.json","2017-08-23--11-51-01.json","2017-09-17--14-48-38.json","2017-02-17--12-31-25.json","2017-05-25--11-48-22.json","2017-08-23--12-42-08.json","2017-09-17--23-40-02.json","2017-02-17--12-56-52.json","2017-05-25--20-29-33.json","2017-08-23--13-45-59.json","2017-09-17--23-41-21.json","2017-02-17--20-01-58.json","2017-05-26--14-47-07.json","2017-08-23--21-35-03.json","2017-09-18--08-30-55.json","2017-02-19--16-36-47.json","2017-05-26--16-27-42.json","2017-08-23--22-13-47.json","2017-09-18--08-37-45.json","2017-02-19--16-43-15.json","2017-05-26--16-56-14.json","2017-08-24--09-57-41.json","2017-09-19--19-57-21.json","2017-02-19--16-50-03.json","2017-05-28--13-28-35.json","2017-08-24--14-22-45.json","2017-09-21--00-07-24.json","2017-02-19--17-12-32.json","2017-05-28--16-09-34.json","2017-08-24--16-03-26.json","2017-09-21--14-59-11.json","2017-02-21--13-07-53.json","2017-05-28--16-41-55.json","2017-08-24--16-13-26.json","2017-09-21--23-30-37.json","2017-02-21--22-25-57.json","2017-05-29--21-00-46.json","2017-08-24--18-57-28.json","2017-09-22--01-24-14.json","2017-02-22--12-16-25.json","2017-05-29--21-11-04.json","2017-08-24--21-18-27.json","2017-09-22--02-02-48.json","2017-02-22--12-39-02.json","2017-05-30--10-18-24.json","2017-08-24--22-07-38.json","2017-09-22--02-21-08.json","2017-02-22--22-10-10.json","2017-05-30--21-26-27.json","2017-08-24--22-49-44.json","2017-09-22--12-19-48.json","2017-02-23--12-17-02.json","2017-05-31--11-45-54.json","2017-08-25--10-41-51.json","2017-09-23--00-44-55.json","2017-02-23--12-37-42.json","2017-05-31--20-37-53.json","2017-08-25--11-43-36.json","2017-09-23--12-13-20.json","2017-02-23--12-45-21.json","2017-06-01--10-13-53.json","2017-08-25--12-44-07.json","2017-09-23--13-30-23.json","2017-02-23--20-32-36.json","2017-06-01--11-09-05.json","2017-08-25--13-20-11.json","2017-09-23--13-36-53.json","2017-02-23--20-43-49.json","2017-06-01--20-54-39.json","2017-08-25--20-55-39.json","2017-09-23--14-38-16.json","2017-02-23--21-08-16.json","2017-06-02--11-39-31.json","2017-08-25--21-48-13.json","2017-09-23--21-28-05.json","2017-02-24--12-28-00.json","2017-06-02--15-22-41.json","2017-08-25--22-16-15.json","2017-09-23--22-04-33.json","2017-02-24--12-58-28.json","2017-06-02--16-54-00.json","2017-08-25--23-09-01.json","2017-09-23--22-52-28.json","2017-02-24--21-54-57.json","2017-06-02--17-57-40.json","2017-08-26--09-46-09.json","2017-09-24--15-25-39.json","2017-02-24--22-02-11.json","2017-06-05--21-14-23.json","2017-08-26--10-47-30.json","2017-09-25--12-07-44.json","2017-02-24--22-14-45.json","2017-06-06--12-42-42.json","2017-08-26--12-14-45.json","2017-09-25--14-02-01.json","2017-02-24--22-24-20.json","2017-06-06--20-13-45.json","2017-08-26--12-41-55.json","2017-09-25--14-19-24.json","2017-02-25--21-46-33.json","2017-06-06--20-13-54.json","2017-08-26--13-00-16.json","2017-09-25--14-44-05.json","2017-02-26--11-47-08.json","2017-06-06--20-14-01.json","2017-08-26--15-31-08.json","2017-09-25--21-51-46.json","2017-02-26--12-45-42.json","2017-06-07--10-26-09.json","2017-08-26--17-39-16.json","2017-09-26--08-22-21.json","2017-02-26--13-36-50.json","2017-06-07--23-15-49.json","2017-08-26--20-24-17.json","2017-09-26--08-53-13.json","2017-02-27--07-41-04.json","2017-06-08--23-31-00.json","2017-08-26--20-40-52.json","2017-09-26--10-05-09.json","2017-02-27--07-57-55.json","2017-06-09--12-38-15.json","2017-08-26--20-48-04.json","2017-09-26--16-57-59.json","2017-02-27--10-04-37.json","2017-06-09--13-07-48.json","2017-08-26--21-28-56.json","2017-09-26--21-04-44.json","2017-02-28--19-01-19.json","2017-06-09--21-52-40.json","2017-08-26--22-51-41.json","2017-09-27--19-27-44.json","2017-02-28--19-11-35.json","2017-06-12--10-06-28.json","2017-08-27--10-07-25.json","2017-09-27--21-47-36.json","2017-02-28--20-15-20.json","2017-06-12--15-22-51.json","2017-08-27--11-13-04.json","2017-09-27--22-04-53.json","2017-02-28--20-50-26.json","2017-06-12--17-22-16.json","2017-08-27--11-55-35.json","2017-09-28--10-36-02.json","2017-02-28--22-10-09.json","2017-06-13--19-55-05.json","2017-08-27--15-10-04.json","2017-09-28--15-37-41.json","2017-02-28--22-23-27.json","2017-06-14--11-19-05.json","2017-08-27--15-56-31.json","2017-09-28--16-34-24.json","2017-03-01--13-29-23.json","2017-06-14--14-06-30.json","2017-08-27--16-48-02.json","2017-09-28--21-14-56.json","2017-03-01--14-06-04.json","2017-06-14--19-38-51.json","2017-08-27--20-12-44.json","2017-09-28--22-22-34.json","2017-03-02--17-48-15.json","2017-06-14--20-01-43.json","2017-08-28--09-59-25.json","2017-09-29--21-12-10.json","2017-03-03--12-30-53.json","2017-06-14--21-10-13.json","2017-08-28--19-26-29.json","2017-09-29--21-24-50.json","2017-03-03--12-45-06.json","2017-06-14--21-43-18.json","2017-08-28--21-07-29.json","2017-09-29--22-55-45.json","2017-03-03--21-00-24.json","2017-06-15--12-07-26.json","2017-08-28--21-30-44.json","2017-09-30--16-02-24.json","2017-03-03--21-15-11.json","2017-06-16--23-14-24.json","2017-08-28--21-48-00.json","2017-09-30--16-23-33.json","2017-03-03--21-28-22.json","2017-06-17--14-31-49.json","2017-08-28--22-59-46.json","2017-09-30--16-31-46.json","2017-03-03--21-34-44.json","2017-06-18--14-35-33.json","2017-08-29--08-33-08.json","2017-09-30--16-47-15.json","2017-03-05--16-53-23.json","2017-06-18--23-06-40.json","2017-08-29--10-45-20.json","2017-09-30--22-47-49.json","2017-03-05--17-14-44.json","2017-06-18--23-24-03.json","2017-08-29--11-35-24.json","2017-10-01--14-48-56.json","2017-03-05--17-22-48.json","2017-06-19--10-50-39.json","2017-08-29--11-45-58.json","2017-10-01--23-50-58.json","2017-03-05--22-14-54.json","2017-06-19--21-01-12.json","2017-08-29--12-53-34.json","2017-10-02--09-46-10.json","2017-03-06--15-13-14.json","2017-06-20--13-51-48.json","2017-08-29--16-06-56.json","2017-10-02--18-48-29.json","2017-03-07--10-41-29.json","2017-06-20--17-02-34.json","2017-08-29--22-29-06.json","2017-10-02--18-55-20.json","2017-03-07--12-16-35.json","2017-06-20--18-49-12.json","2017-08-29--23-27-34.json","2017-10-02--19-04-02.json","2017-03-08--11-09-34.json","2017-06-21--13-17-47.json","2017-08-30--10-05-23.json","2017-10-02--19-16-34.json","2017-03-08--20-17-56.json","2017-06-21--14-48-47.json","2017-08-30--11-03-15.json","2017-10-02--19-41-45.json","2017-03-08--20-38-20.json","2017-06-21--23-30-01.json","2017-08-30--11-54-40.json","2017-10-02--19-41-46.json","2017-03-08--21-02-24.json","2017-06-23--00-07-08.json","2017-08-30--19-35-15.json","2017-10-03--09-43-07.json","2017-03-09--07-52-59.json","2017-06-23--10-43-30.json","2017-08-30--20-20-23.json","2017-10-04--00-43-06.json","2017-03-09--08-43-11.json","2017-06-23--11-02-53.json","2017-08-30--20-59-57.json"];
const trips = ["2016-07-02--11-56-24.json","2017-03-09--09-21-57.json","2017-06-23--23-11-39.json","2017-08-30--22-39-11.json"];

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: null,
      tripList: null,
      data: null,
      zoom: 10,
      lineWeight: 6,
      currentLatLng: {
        lat: 0,
        lng: 0
      },
    };

    this.setTripHandler = this.setTripHandler.bind(this);
    this.setLineWeight = this.setLineWeight.bind(this);
    this.calcZoom = this.calcZoom.bind(this);
    this.getGeoLocation = this.getGeoLocation.bind(this);
    this.resetCenter = this.resetCenter.bind(this);
  }

  setTripHandler = (tripName) => {
    let data = require('./trips/' + tripName);
    let zoom = this.calcZoom(data);

    this.setState((prevState) => ({
      ...prevState,
      tripName: tripName,
      data: data,
      currentLatLng: {
        lat: data.coords[Math.floor(data.coords.length/2)].lat,
        lng: data.coords[Math.floor(data.coords.length/2)].lng,
      },
      zoom: zoom
    }));
  };

  setLineWeight = (weight) => {
    this.setState((prevState) => ({
      ...prevState,
      lineWeight: weight,
    }));
  };

  calcZoom = (data) => {
    const {coords} = data;
    let dist = (coords[coords.length - 1].dist - coords[0].dist);
    let zoom = 0;

    if (dist < 0.5) {
      zoom = 16;
    } else if (dist < 5) {
      zoom = 14;
    } else if (dist < 10) {
      zoom = 13;
    } else if (dist < 30) {
      zoom = 12;
    } else if (dist < 50) {
      zoom = 11;
    } else if (dist < 60) {
      zoom = 8;
    } else if (dist < 70) {
      zoom = 6;
    } else {
      zoom = 4;
    }

    return zoom;
  };

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          return {lat: position.coords.latitude, lng: position.coords.longitude}
        }
      )
    }
  };

  resetCenter = () => {
    const { coords } = this.state.data;
    this.setState((prevState) => ({
      ...prevState,
      currentLatLng: {
        lat: coords[Math.floor(coords.length/2)].lat,
        lng: coords[Math.floor(coords.length/2)].lng
      }
    }));
  };

  componentWillMount() {
    if (trips.length >= 1) {
      let data = require('./trips/' + trips[0]);
      let zoom = this.calcZoom(data);
      this.setState({
        tripName: trips[0],
        tripList: trips,
        data: data,
        zoom: zoom,
        lineWeight: 6,
        currentLatLng: {
          lat: data.coords[Math.floor(data.coords.length/2)].lat,
          lng: data.coords[Math.floor(data.coords.length/2)].lng,
        },
      })
    }
  }

  render() {

    return (
      <div>
        <CssBaseline/>
        <div className="sidebar-container-parent">
          <SidebarContainer
            setTripHandler={this.setTripHandler}
            setLineWeight={this.setLineWeight}
            resetCenter={this.resetCenter}
            tripName={this.state.tripName}
            tripList={this.state.tripList}
            lineWeight={this.state.lineWeight}
            data={this.state.data}
          />
        </div>
        <div className="map-container-parent">
          <MapContainer
            data={this.state.data}
            currentLatLng={this.state.currentLatLng}
            zoom={this.state.zoom}
            lineWeight={this.state.lineWeight}
          />
        </div>
      </div>
    );
  }
}

export default App;