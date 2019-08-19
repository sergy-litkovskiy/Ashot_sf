<?php

namespace App\Controller;

use App\Helper\ArrayHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class StaticPageController extends AbstractController
{
    private const SLUG_TO_ROUTE_MAP = [
        'ptn'                  => 'Static/ptn_pnx.twig',
        'svet-i-tma'           => 'Static/sevt_i_tma.twig',
        'lost-kiev'            => 'Static/lost_kiev.twig',
        'kiev-vchera-segodnya' => 'Static/kiev_vchera_segodnya.twig',
        'nostalgy'             => 'Static/nostalgy.twig',
    ];

    /**
     * @param string $slug
     * @return Response
     */
    public function showAction(string $slug): Response
    {
        if (!\in_array($slug, self::SLUG_TO_ROUTE_MAP)) {
            throw $this->createNotFoundException();
        }

        return $this->render(ArrayHelper::arrayGet(self::SLUG_TO_ROUTE_MAP, $slug), []);
    }
}
