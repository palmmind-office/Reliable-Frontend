import { forexModule } from "../Module/forexModule";
import { hamburger } from "../Module/hamburgerModule";
import { quickReplyModule } from "../Module/quickReplyModule";
import { sliderModule } from "../Module/sliderModule";
import { formSupporModule } from "../Module/formSupportModule";
import { locationModule } from "../Module/locationModule";
import { multipleTitle } from "../general/multipleTitleModule";
import { SlickSliderModule } from '../Module/SlickSliderModule';
import { generalSliderModule } from "../general/generalSliderModule";
import { genericTable } from "../general/genericTableModule";
import { fastfactsModule } from "../Module/fastfactsModule";
import { ListItemModule } from "../Module/ListItemModule";
import { contextouter } from '../Module/contextouterModule';
import { contextinner } from '../Module/contextinnerModule';
import { sliderButtonWithSlider } from '../Module/sliderButtonWithslider';
import { FormmessageSection } from '../Module/FormmessageSection';
import { catagoriesContext } from '../Module/catagoriesContext';
import { LoadingModule } from '../general/loading';
import { Detaildrawer } from '../DetailsDrawer/detailDrawerModule';
import { detailModule } from '../Module/detailModule';
import { contactmodule } from '../Module/contact.Module';
import {selectBoxmodule} from '../Module/selectboxModule';
import { Button } from "./Botton";
// for policy
import { detailPolicyDrawer } from '../detailPolicy/detailPolicyDrawer';
import { multipartformModule } from '../Module/multipartformModule';
import { NewHomeModule } from "./ShineModule/NewHomeModule";
import { ListReplyModule } from "./ShineModule/ListReplyModule";
import { TableModule } from "./ShineModule/TableModule";
import { FormModule } from "./ShineModule/FormModule";
import { ServiceRequest } from "./ShineModule/ShineServiceModule/ServiceRequestForm";
import { BalanceInquiry } from "./ShineModule/ShineServiceModule/BalanceInquery";
import { serviceRequestData } from "./ShineModule/Service/serviceRequest";
import { BlockCardModule } from "./ShineModule/ShineServiceModule/blockCard";
import { DisputeHandling } from "./ShineModule/ShineServiceModule/disputeHandling";
import { Mobilebanking } from "./ShineModule/ShineServiceModule/ShineMobileBanking/MobileBankingForm";
import { Otp_validationService } from "./ShineModule/ShineServiceModule/ShineMobileBanking/Otp_validationService";


class SandBox {
  constructor() {
    // console.log("sandbox module initialized");
  }

  showModules() {
    LoadingModule.init('#context-container');
    contextouter.show();
    contextinner.show();
    contextinner.loaded = true;

  }
  clearAllModules() {
    hamburger.hideContainer();
    forexModule.clear();
    quickReplyModule.clear();
    Detaildrawer.clear();
    formSupporModule.clear();
    sliderModule.clear();
    generalSliderModule.clear();
    detailModule.clear();
    locationModule.clear();
    multipleTitle.clear();
    // findtreksModule.clear();
    fastfactsModule.clear();
    catagoriesContext.clear();
    ListItemModule.clear();
    SlickSliderModule.clear();
    genericTable.clear();
    // accordanceModule.clear();
    sliderButtonWithSlider.hideContainer();
    FormmessageSection.hideContainer();
    detailPolicyDrawer.clear();
    multipartformModule.clear();
    contactmodule.clear();
    selectBoxmodule.hideContainer();

    // staring of  shine Resunga bank
    NewHomeModule.hideContainer();
    ListReplyModule.clear();
    TableModule.clear();
    FormModule.clear();
    ServiceRequest.clear();
    BalanceInquiry.clear()
    serviceRequestData.clear();
    BlockCardModule.clear();
    DisputeHandling.clear();
    Mobilebanking.clear();
    Otp_validationService.clear();
    // Button.clear();

  }
}

export var sandBox = new SandBox();