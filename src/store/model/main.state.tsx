import CurrentViewState from '../current-view/model/current-view.state';
import LanguageState from '../language/model/language.state';
import LoadingState from '../loading/model/loading.state';
import MapState from '../map/model/map.state';
import StatsState from '../stats/model/stats.state';

export default interface MainState {
    currentView: CurrentViewState;
    language: LanguageState;
    loading: LoadingState;
    map: MapState;
    stats: StatsState;
}
