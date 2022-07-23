import { forexModule } from '../Module/forexModule';
import { quickReplyModule } from '../Module/quickReplyModule';
import { generalReplyModule } from '../Module/generalReplyModule';
import { ListReplyModule } from './ShineModule/ListReplyModule';
import { formSupporModule } from '../Module/formSupportModule';
import { locationModule } from '../Module/locationModule';
import { Detaildrawer } from '../DetailsDrawer/detailDrawerModule';
import { contactmodule } from '../Module/contact.Module';
import{selectBoxmodule} from '../Module/selectboxModule';
import { NewHomeModule } from './ShineModule/NewHomeModule';
import { FormModule } from './ShineModule/FormModule';
import { multipleTitle } from '../general/multipleTitleModule';
import { genericTable } from '../general/genericTableModule';
import {generalreplywithreletedqueries} from '../general/generalreplywithreletedqueries';
// import { formSupporModule } from './formSupportModule';
import { ServiceRequest } from './ShineModule/ShineServiceModule/ServiceRequestForm';
import { BalanceInquiry } from './ShineModule/ShineServiceModule/BalanceInquery';
import { locationmodule } from '../general/locationmodule';
import { serviceRequestData } from './ShineModule/Service/serviceRequest';
import { BlockCardModule } from './ShineModule/ShineServiceModule/blockCard';
import { DisputeHandling } from './ShineModule/ShineServiceModule/disputeHandling';
import { ListItemModule } from './ListItemModule';
import { Otp_validationService } from './ShineModule/ShineServiceModule/ShineMobileBanking/Otp_validationService';
import { Mobilebanking } from './ShineModule/ShineServiceModule/ShineMobileBanking/MobileBankingForm';
import { detailPolicyDrawer } from '../detailPolicy/detailPolicyDrawer';
import{iconReplyModule} from './iconReplyModule';


export function contentRender(data) {
    let type = data.type;
    switch (type) {
        case 'home':
            NewHomeModule.init(data);
            break;
        case 'ListReply':
            ListReplyModule.init(data);
            break;
        case 'detailDrawer':
            Detaildrawer.init(data);
            break
        case 'quick_reply':
            quickReplyModule.init(data);
            break;
        case 'form':
            FormModule.init(data);
            break;
        case 'location':
            locationModule.init(data);
            break;
        case 'contact':
            contactmodule.init(data);
            break;
        case 'payments': 
            quickReplyModule.init(data);
            break;
        case 'detailpolicy':
            detailPolicyDrawer.init(data);
            break;
        case 'table': 
            genericTable.init(data);
            break;
        case 'general_reply_with_reletedqueries':
            generalreplywithreletedqueries.init(data);
            break;
        case 'Selectbox':
            selectBoxmodule.init(data);
            break;
        case 'service-form':
            ServiceRequest.init(data);
            break;
        case 'form':            
            formSupporModule.init(data);
            break;
        case 'balance-form':
            BalanceInquiry.init(data);
            break;
        case 'block-form':
            BlockCardModule.init(data)
            break;
        case 'dispute-form':
            DisputeHandling.init(data)
            break;
        case 'ListItem':
            ListItemModule.init(data)
            break;
        case 'mobile-form':
            Otp_validationService.init(data)
            break;
        case 'icon_reply':
            iconReplyModule.init(data); 
            break;   
   
        default:
            generalReplyModule.init(data);
    }
}