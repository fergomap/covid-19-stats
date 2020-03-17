import CampaignState from '../campaign/model/campaign.state';
import CityState from '../city/model/city.state';
import LoadingState from '../loading/model/loading.state';
import ModalState from '../modal/model/modal.state';
import UserState from '../user/model/user.state';

export default interface MainState {
    campaign: CampaignState;
    city: CityState;
    loading: LoadingState;
    modal: ModalState;
    user: UserState;
}
